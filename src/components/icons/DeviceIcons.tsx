import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const AppleIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('text-current', className)}
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.05 20.28c-.98.95-2.05.8-3.08.36-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.2 2.31-.88 3.53-.84 1.58.1 2.78.62 3.58 1.57-3.35 2.11-2.28 6.03.64 7.36-.59 1.74-1.42 3.34-2.83 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.34 2.19-1.66 4.2-3.74 4.25z"
    />
  </svg>
);

export const OuraIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('text-current', className)}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"
    />
  </svg>
);

export const FitbitIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('text-current', className)}
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.7 16.53c-.34.34-.77.53-1.24.53s-.89-.19-1.24-.53-.53-.77-.53-1.24.19-.89.53-1.24.77-.53 1.24-.53.89.19 1.24.53.53.77.53 1.24-.19.89-.53 1.24zm-2.65-2.65c-.34.34-.77.53-1.24.53s-.89-.19-1.24-.53-.53-.77-.53-1.24.19-.89.53-1.24.77-.53 1.24-.53.89.19 1.24.53.53.77.53 1.24-.19.89-.53 1.24zm-2.65-2.65c-.34.34-.77.53-1.24.53s-.89-.19-1.24-.53-.53-.77-.53-1.24.19-.89.53-1.24.77-.53 1.24-.53.89.19 1.24.53.53.77.53 1.24-.19.89-.53 1.24zM12.06 8c-.47 0-.89-.19-1.24-.53s-.53-.77-.53-1.24.19-.89.53-1.24.77-.53 1.24-.53.89.19 1.24.53.53.77.53 1.24-.19.89-.53 1.24-.77.53-1.24.53zm-2.65 2.65c-.34.34-.77.53-1.24.53s-.89-.19-1.24-.53-.53-.77-.53-1.24.19-.89.53-1.24.77-.53 1.24-.53.89.19 1.24.53.53.77.53 1.24-.19.89-.53 1.24z"
    />
  </svg>
);

export const GarminIcon = ({ className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('text-current', className)}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7v-2z"
    />
  </svg>
);