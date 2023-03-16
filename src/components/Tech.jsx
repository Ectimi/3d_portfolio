import { useRef } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import useVisible from '../hooks/useVisible';

const Tech = () => {
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);

  return (
    <div
      ref={elemRef}
      className="flex flex-row flex-wrap justify-center gap-10"
    >
      {isVisible &&
        technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
