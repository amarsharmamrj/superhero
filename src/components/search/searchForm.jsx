import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';  
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Image from '../image'
import Description from '../description'
import Carousel2 from '../carousel'


import axios from 'axios';
// import { ContactSupportOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  width: {
    width: '60%',
    marginRight: '10px'
  },
  button: {
    display: 'inline',
    width: 'auto'
  },
  display:{
    display: 'none'
  },
  flex: {
    display: 'flex'
  },
  displayCarousel: {
    display: 'block'
  }
}));

export default function SearchForm() {
  const classes = useStyles();

  const [image, setImage] = useState('');
  const [apperance, setApperance] = useState({});
  const [biogrphy, setBiography] = useState({});
  const [connections, setConnections] = useState({});
  const [data, setData] = useState({});
  const [height, setHeight] = useState(''); 
  const [weight, setWeight] = useState('')
  const [powerstats, setPowerstats] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    const query = document.getElementById('search-feild').value;
    if(query===''){
      alert("Please enter valid name");
    }else {
      
    // get data from api
    axios.get(`https://www.superheroapi.com/api.php/4229723467148098/search/${query}`)
    .then(res => {
      console.log(res);
      
      let result = res.data.results[0]
      setData(result);

      let image = res.data.results[0].image.url
      setImage(image);
      
      let apperance = res.data.results[0].appearance
      setApperance(apperance)
      
      let biography = res.data.results[0].biography
      setBiography(biography)

      let connections = res.data.results[0].connections
      setConnections(connections)

      let height = res.data.results[0].appearance.height[1]
      setHeight(height);

      let weight = res.data.results[0].appearance.weight[1]
      setWeight(weight);

      let powerstatsData = res.data.results[0].powerstats
      setPowerstats(powerstatsData);

    }).catch(err => {
      console.log(err);
      alert("Please enter valid name");
    })
    document.getElementById('search-feild').value = ''
    document.getElementById('carousel').style.display = 'none'
    classes.display = 'block';
    }

  }

  return (
    // <Grid container spacing={3}>
      <Grid item md={12}>
        <form className={classes.root} noValidate autoComplete="off">
          
        <Grid item md={12}>
          <TextField className={classes.width} type="text" id="search-feild" label="Search.." variant="outlined" size="small"/>

          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            className={classes.button}
            startIcon={<SearchIcon />
            }
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid> 

        <div id="carousel" className={classes.displayCarousel}>
          <Carousel2/>
        </div>      

        {/* <Container>  */}
        {/* <Grid container justifyContent="center"> */}
          <Grid item md={12} className={classes.display}>
            <div className={classes.flex}>
              <Image image={image} powerstats={powerstats} />
              
              <Description 
              data={data}
              apperance={apperance} 
              biogrphy={biogrphy} 
              connections={connections} 
              height={height}
              weight={weight}
              powerstats={powerstats}
              />
            </div>
          </Grid>  
        {/* </Grid>     */}
        {/* </Container> */}


        </form>
      </Grid>
    // </Grid>
  );
}
