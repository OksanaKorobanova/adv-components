// polymorphic component
import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';

type ContainerProps<T extends ElementType> = {
  component?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  component,
  children,
  ...props
}: ContainerProps<C>) {
  const El = component || 'div';
  return (
    <El className='container' {...props}>
      {children}
    </El>
  );
}
