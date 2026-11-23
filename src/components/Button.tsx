import type { ButtonHTMLAttributes, ReactNode } from "react";
import button from "../styles/Button.module.css";

interface AddToCartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children?: ReactNode;
}

export const AddToCartButton = ({
  isLoading = false,
  children,
  className = "",
  disabled,
  ...props
}: AddToCartButtonProps) => {
  return (
    <button
      className={`${button["btn-card"]} ${className}`.trim()}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span>
          <i className="bi bi-arrow-repeat spin"></i> Cargando...
        </span>
      ) : (
        <>
          {children}
          Agregar <i className="bi bi-cart-plus"></i>
        </>
      )}
    </button>
  );
};
