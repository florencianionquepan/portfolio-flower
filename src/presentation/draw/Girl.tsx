import { useEffect, useRef } from 'react';
import './girl.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { TechSticker } from './TechSticker';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { showTechnologies } from '../../store/technology/thunk';

export const Girl = () => {
  const catEyeLeftRef = useRef<HTMLDivElement | null>(null);
  const catEyeRightRef = useRef<HTMLDivElement | null>(null);
  const cartoonGirlRef = useRef<HTMLDivElement | null>(null); // Ref para el contenedor principal

  const dispatch = useAppDispatch();
  const {technologies} = useSelector( (state: RootState) => state.technology);

  useEffect(() => {
    dispatch(showTechnologies());

  }, [dispatch])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!catEyeLeftRef.current || !catEyeRightRef.current) return

      const leftEye = catEyeLeftRef.current;
      const rightEye = catEyeRightRef.current;
      const cartoonGirl = cartoonGirlRef.current;

      if (!leftEye || !rightEye || !cartoonGirl) return;

      // Obtenemos la posición y dimensiones del contenedor usando el ref
      const rect = cartoonGirl.getBoundingClientRect();

      // Calculamos la posición relativa del mouse dentro del elemento
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculamos el centro del elemento
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculamos la dirección desde el centro
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      // Limitamos el movimiento de los ojos
      const maxMove = 3;
      const moveX = Math.max(Math.min(deltaX / 20, maxMove), -maxMove);
      const moveY = Math.max(Math.min(deltaY / 20, maxMove), -maxMove);

      // Aplicamos la transformación a los ojos
      leftEye.style.transform = `translate(${moveX}px, ${moveY}px)`;
      rightEye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cartoon-girl w-full max-w-[300px] aspect-[1/1] mx-auto" ref={cartoonGirlRef}>
      
      <div className='hear-back'></div>
      <div className='head'>
        <div className="bang-left"></div>
        <div className="bang-right"></div>

        <div className='glass l'>
          <div className='eye'></div>
        </div>
        <div className='glass r'>
          <div className='eye'></div>
        </div>
        <div className='ear'></div>
        <div className='nose'></div>
        <div className='mouth'></div>
      </div>
        
      <div className='neck'></div>
      <div className='body'></div>

      <div className='desk'></div>
      <div className='desk-wall'></div>
      <div className='hand'></div>
      <div className='computer grid grid-cols-6 justify-items-center items-center'>
      {technologies.slice().reverse().map((t)=>(
              <TechSticker
              key={t.id}
              technology={t}
              />
            ))}
      </div>

      <div className='cat'>
        <div className='cat-head'>
          <div className='cat-ear'></div>
          <div className='cat-ear'></div>
          <div className="cat-eye">
            <div className="cat-pupil" ref={catEyeLeftRef}></div>
          </div>
          <div className="cat-eye">
            <div className="cat-pupil" ref={catEyeRightRef}></div>
          </div>
          <div className='cat-nose'>
            <div className='cat-whisker-one'></div>
            <div className='cat-whisker-two'></div>
          </div>
        </div>
        <div className='cat-body'>
          <div className='paw'></div>
          <div className='paw'></div>
          
        </div>
        <div className='tail-container'>
          <div className='tail'>
            <div className='tail seg'>
              <div className='tail seg'>
                <div className='tail'>
                  <div className='tail'>
                    <div className='tail'>
                      <div className='tail'>
                        <div className='tail last'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
