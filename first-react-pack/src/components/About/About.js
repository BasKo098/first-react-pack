import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About =  (props) => {
    return (
        <div className={styles.about}>
        <PageTitle>About</PageTitle>     
       </div>
    );
};
export default About;