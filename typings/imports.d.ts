declare module '*.css';
declare module '*.png';
declare module '*.svg?icon'
declare module '*.svg' {
  const Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default Svg;
}
declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}
