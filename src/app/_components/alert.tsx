import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b border-ink-900/10", {
        "bg-amber-100 text-ink-800": preview,
        "bg-white text-ink-600": !preview,
      })}
    >
      <Container>
        <div className="py-3 text-center text-sm font-medium">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline decoration-amber-300/70 transition-colors duration-200 hover:text-amber-600 hover:decoration-amber-400"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline decoration-amber-300/70 transition-colors duration-200 hover:text-amber-600 hover:decoration-amber-400"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
