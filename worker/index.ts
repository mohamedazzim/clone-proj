import { handleImageOptimization } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS?: {
    fetch(request: Request): Promise<Response>;
  };
  IMAGES?: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(request: Request, env: Env | undefined, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (
      !env?.ASSETS &&
      (url.pathname.startsWith("/images/") || url.pathname.startsWith("/fonts/") || url.pathname === "/og.png")
    ) {
      return new Response(null, {
        headers: { "x-vinext-static-file": encodeURIComponent(url.pathname) },
      });
    }

    if (url.pathname === "/_vinext/image") {
      if (!env?.ASSETS) return new Response("Image assets are unavailable", { status: 503 });

      const transformImage = env.IMAGES
        ? async (body: ReadableStream, { width, format, quality }: { width: number; format: string; quality: number }) => {
            const result = await env.IMAGES!.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
            return result.response();
          }
        : undefined;

      return handleImageOptimization(
        request,
        {
          fetchAsset: (path) => env.ASSETS!.fetch(new Request(new URL(path, request.url))),
          transformImage,
        },
      );
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
