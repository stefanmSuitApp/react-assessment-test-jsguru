import { ErrorBoundary } from './ErrorBoundary';
import { SpinnerWrapper } from '../libs/styled-components/SpinnerComponent';
import { primaryColor } from '../libs/styled-components/defaultStyles';

type Props = {
  borderSize?: number;
  color?: string;
  size?: number;
  speed?: number;
};

const Spinner = ({
  borderSize = 4,
  color = primaryColor,
  size = 40,
  speed = 1,
}: Props) => {
  return (
    <ErrorBoundary>
      <SpinnerWrapper
        $borderSize={borderSize}
        $color={color}
        $size={size}
        $speed={speed}
      />
    </ErrorBoundary>
  );
};

export { Spinner };
