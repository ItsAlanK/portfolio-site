import { useState, useEffect } from 'react';
import { Container, Row, Col  } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import portraitImg from '../assets/img/portrait.png'

export const Hero = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ 'Full Stack Software Dev', 'Web Designer', 'Illustrator', 'Thinks he\'s a funny guy' ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); 
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(100 - 20);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1 );
            setDelta(100);
        }
    }

    return (
        <section class='hero' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6}>
                        <span className="title">ALAN KINSELLA</span>
                        <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Software Dev", "Web Designer", "Illustrator", "Thinks he&#39;s a funny guy" ]'><span className="wrap">{ text }</span></span></h1>
                        <p>
                            Obsessed with learning and expanding my skillset. Passionate about clean, sleek design inside and out.
                        </p>
                        <button onClick={() => console.log('chat')}>Let's Chat <FontAwesomeIcon icon={ faPaperPlane }/>&nbsp;</button>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={ portraitImg } alt="Alan Kinsella, ItsAlanK, portrait." />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}