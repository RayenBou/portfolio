import React from "react";

// Type ReactNode correct
type ReactNode = React.ReactNode;

// Interface pour ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
  value?: any;
}

// ThemeProvider - version simplifiée sans dépendances circulaires
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children,
  value 
}) => {
  return (
    <div className="theme-provider">
      {children}
    </div>
  );
};

// Interface pour Button
interface ButtonProps {
  color?: string;
  variant?: "filled" | "outlined";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;  // Ajout de la prop fullWidth au typage
  [key: string]: any;   // Pour gérer les autres props
}


// Composant Button
export const Button: React.FC<ButtonProps> = ({ 
  color = "primary", 
  variant = "filled", 
  className = "", 
  children, 
  onClick,
  fullWidth = false,  // Valeur par défaut false
  ...props 
}) => {
  // Conversion des couleurs Material Tailwind en couleurs DaisyUI
  const colorMap: Record<string, string> = {
    "blue-gray": "neutral",
    "blue": "primary",
    "red": "error",
    "green": "success",
    "yellow": "warning",
  };

  const btnColor = colorMap[color] || "primary";
  const btnVariant = variant === "outlined" ? "btn-outline" : "";
  const btnFullWidth = fullWidth ? "w-full" : "";  // Classe conditionnelle pour largeur complète
  
  return (
    <button 
      className={`btn ${btnVariant} btn-${btnColor} ${btnFullWidth} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Interface pour Typography
interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "paragraph" | "small";
  color?: string;
  className?: string;
  children: ReactNode;
  [key: string]: any; // Pour gérer les autres props
}

// Composant Typography
export const Typography: React.FC<TypographyProps> = ({ 
  variant = "paragraph", 
  color = "", 
  className = "", 
  children,
  ...props 
}) => {
  const variantMap: Record<string, string> = {
    "h1": "text-5xl font-bold",
    "h2": "text-4xl font-bold",
    "h3": "text-3xl font-bold",
    "h4": "text-2xl font-bold",
    "h5": "text-xl font-bold",
    "h6": "text-lg font-bold",
    "lead": "text-xl",
    "paragraph": "text-base",
    "small": "text-sm"
  };

  const colorClass = color === "blue-gray" ? "text-neutral" : 
                    color === "blue" ? "text-primary" : 
                    color ? `text-${color}` : "";

  // Choisir le bon élément HTML en fonction du variant
  if (variant.startsWith('h') && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant)) {
    const HeadingTag = variant as keyof JSX.IntrinsicElements;
    return (
      <HeadingTag 
        className={`${variantMap[variant]} ${colorClass} ${className}`}
        {...props}
      >
        {children}
      </HeadingTag>
    );
  }

  return (
    <div 
      className={`${variantMap[variant]} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Interface pour Card
interface CardProps {
  className?: string;
  children: ReactNode;
  shadow?: boolean;
  color?: string;
  [key: string]: any; // Pour gérer les autres props
}

// Composant Card
export const Card: React.FC<CardProps> = ({ 
  className = "", 
  children,
  shadow = true,
  color = "base-100",
  ...props 
}) => {
  return (
    <div 
      className={`card ${shadow ? 'shadow-lg' : ''} bg-${color} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Interface pour CardHeader
interface CardHeaderProps {
  className?: string;
  children: ReactNode;
  floated?: boolean;
  [key: string]: any; // Pour gérer les autres props
}

// Composant CardHeader
export const CardHeader: React.FC<CardHeaderProps> = ({ 
  className = "", 
  children,
  floated = false,
  ...props 
}) => {
  return (
    <div 
      className={`${floated ? '-mt-6 mx-4 relative z-10' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Interface pour CardBody
interface CardBodyProps {
  className?: string;
  children: ReactNode;
  [key: string]: any; // Pour gérer les autres props
}

// Composant CardBody
export const CardBody: React.FC<CardBodyProps> = ({ 
  className = "", 
  children,
  ...props 
}) => {
  return (
    <div 
      className={`card-body ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
// Interface pour Input
interface InputProps {
  color?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: string;
  [key: string]: any; // Pour gérer les autres props
}

// Composant Input
export const Input: React.FC<InputProps> = ({ 
  color = "primary", 
  label = "", 
  size = "md", 
  className = "", 
  type = "text",
  ...props 
}) => {
  const sizeClasses = {
    "sm": "h-8 text-sm px-3",
    "md": "h-10 text-base px-4",
    "lg": "h-12 text-lg px-5",
  };

  const colorMap: Record<string, string> = {
    "blue-gray": "neutral",
    "blue": "primary",
    "red": "error",
    "green": "success",
    "yellow": "warning",
  };
  
  const inputColor = colorMap[color] || "primary";
  
  return (
    <div className="relative w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`input input-bordered input-${inputColor} w-full ${sizeClasses[size]} ${className}`}
        {...props}
      />
    </div>
  );
};

// Interface pour Textarea
interface TextareaProps {
  color?: string;
  label?: string;
  rows?: number;
  className?: string;
  [key: string]: any; // Pour gérer les autres props
}

// Composant Textarea
export const Textarea: React.FC<TextareaProps> = ({ 
  color = "primary", 
  label = "", 
  rows = 4,
  className = "", 
  ...props 
}) => {
  const colorMap: Record<string, string> = {
    "blue-gray": "neutral",
    "blue": "primary",
    "red": "error",
    "green": "success",
    "yellow": "warning",
  };
  
  const textareaColor = colorMap[color] || "primary";
  
  return (
    <div className="relative w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`textarea textarea-bordered textarea-${textareaColor} w-full px-4 py-3 ${className}`}
        {...props}
      />
    </div>
  );
};
// Exporter tous les composants
export default {
  ThemeProvider,
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
  Input, // Ajouté
  Textarea // Ajouté
};