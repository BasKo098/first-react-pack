import SearchForm from "../SearchForm/SearchForm";
import Hero from "../Hero/Hero";
import List from "../List/List";
import Container from "../Container/Container";
import Lists from '../Lists/Lists';


const Home = props =>{
    return(
        <Container>
            <Hero />
            <SearchForm />
            <Lists />
        </Container>
    )
};

export default Home;
