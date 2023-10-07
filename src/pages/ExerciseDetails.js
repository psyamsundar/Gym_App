import React from 'react'
import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import  Details  from '../components/Details';
import  ExerciseVideos   from '../components/ExerciseVideos';
import  SimilarExercises  from '../components/SimilarExercises';

const ExerciseDetails = () => {
const [ExerciseDetails, setExerciseDetails] = useState({});
const [exerciseVideos, setexerciseVideos] = useState([])
const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
const [equiupmentExercises, setEquipmentExercises] = useState([]);
const { id } =useParams();

useEffect(() => {
  const fetchExercisesData = async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    
    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
    console.log({exerciseDetailData})
    setExerciseDetails(exerciseDetailData);

    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
    setexerciseVideos(exerciseVideosData.contents);

    const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
    setTargetMuscleExercises(targetMuscleExercisesData);

    const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
    setEquipmentExercises(equipmentExercisesData);

  }
  fetchExercisesData();
}, [id]);

  return (
    <Box>
      <Details exerciseDetails={ExerciseDetails}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={ExerciseDetails.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equiupmentExercises={equiupmentExercises}/>
    </Box>
  )
}

export default ExerciseDetails
