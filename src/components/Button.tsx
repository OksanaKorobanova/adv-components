import { ComponentPropsWithoutRef } from 'react';

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

// type predicate isTrue = props is AnchorProps
const isAnchorProps = (
  props: AnchorProps | ButtonProps
): props is AnchorProps => {
  return 'href' in props;
};

const Button = (props: AnchorProps | ButtonProps) => {
  if (isAnchorProps(props)) {
    return <a className='button' {...props}></a>;
  }

  return <button className='button' {...props}></button>;
};

export default Button;
