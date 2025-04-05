interface Props {
  top?: number | string;
  left?: number | string;
}

const LongBar = ({ top = 0, left = 0 }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='2'
      height='127'
      viewBox='0 0 2 127'
      fill='none'
      style={{
        position: 'absolute',
        top,
        left,
      }}
    >
      <rect x='0.113281' width='1.54618' height='42.3332' fill='#DADE00' />
      <rect
        x='0.113281'
        y='42.3334'
        width='1.54618'
        height='42.3332'
        fill='#7BD8F7'
      />
      <rect
        x='0.113281'
        y='84.6667'
        width='1.54618'
        height='42.3332'
        fill='#5385D6'
      />
    </svg>
  );
};

export default LongBar;
