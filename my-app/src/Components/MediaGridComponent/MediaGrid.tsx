import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

const apikey = process.env.REACT_APP_API_KEY

interface IState {
    poster_path: string | null;
    overview: string | undefined;
    title: string | undefined;
}


interface IMediaGridProps {
    SearchQuery: (string | null);
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ poster_path: "", overview:"", title:""}]);
    

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=" + apikey + "&language=en-US&query=" + 
            props.SearchQuery +
            "&page=1")
            .then(response => response.json())
            .then(response => {
                setItemArray(response.results)
            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SearchQuery]);

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el.poster_path || !el.overview || !el.title) {
            return;
        }
    
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard ImageUrl={"https://image.tmdb.org/t/p/w500" + el.poster_path} Title = {el.title} Description={el.overview} />
            </Grid>)
    });

    return (
        <div>
            <Grid container spacing={2} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid