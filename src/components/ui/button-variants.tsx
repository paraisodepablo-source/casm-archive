import { cva } from "class-variance-authority";

export const institutionalButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-border bg-background text-foreground hover:bg-muted hover:border-foreground",
        primary:
          "border border-primary bg-primary text-primary-foreground hover:bg-primary/90",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-transparent",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);