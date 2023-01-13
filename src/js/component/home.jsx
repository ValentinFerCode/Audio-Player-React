import React, {useState, useEffect, useRef} from "react";

//create your first component
const Home = () => {
	const audioElement = useRef(null); //la const almacena una referencia que no tiene valor inicial
	const [song, setSongs] =useState([]);

function getSongs() { // funcion para recolectar y solicitar del servidor las canciones

	fetch("https://assets.breatheco.de/apis/sound/songs")
	.then(response => response.json()) // a la respuesta del servidor la convertimos en response.json
	.then(data => {
	(setSongs(data)) 
		console.log(data); // data es el resultado de response.json
	})

}


useEffect(() =>{ //al renderizar nos muestra un efecto
	getSongs() 

}, [])



const playSong = (url) => { // funcion para reproducir canciones
	console.log(audioElement.current.src);
	audioElement.current.src = "https://assets.breatheco.de/apis/sound/" + url // asignamos una nueva url y hacer console.log debajo para verificar si se ingreso la nueva url
	console.log(audioElement.current.src)
	console.log(url);

	if (audioElement.current.paused) {
		audioElement.current.src = "https://assets.breatheco.de/apis/sound/" + url 
		audioElement.current.play();
	  } else {
		videoElem.pause();
		playButton.className = "";
	  }	

	};
	



	//declaramos estado del contador
	// const [counter, setCounter]= useState(0);
	// const [characters, setCharacters] =useState([]);


// function handlecounter() {
	// 	setCounter(counter+1)
	// }

	// useEffect(()=>{
	// 	//codigo a ejecutar
	// 	console.log("Haz aumentado el numero de seguidor");
	// },[counter])//cuando el array está lleno el efecto va a cargar el codigo a ejecutar VARIAS VECES

// 	useEffect(()=>{
// 		//codigo a ejecutar
// 	console.log("La pagina se ha cargado exitosamente");
// 	fetch('https://rickandmortyapi.com/api/character') //1.ir a buscar info en la url
// 	.then((response)=>response.json()) //2.Convierte la respuesta en un json
// 	.then((data)=>setCharacters(data.results)) //3. Guarda el json en un objeto data

// 	},[])//cuando el array está vacio el va a cargar el codigo a ejecutar UNA vez cargada la pagina
// console.log(characters);
	return (
		<>
		<h1>Usando UseEffect</h1>
		<h2>Contador:</h2>
{/* dibujamos la lista de canciones */}
		<ul>
			{song.map((oneSong, index)=><li onClick={ ()=> playSong(oneSong.url)} key={oneSong.name}>{oneSong.name}</li>)}
		</ul>
		<div>

		<audio controls src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3" ref={audioElement}>
  <source type="audio/ogg"/>
  {/* <source src="horse.mp3" type="audio/mpeg"> */}
  Your browser does not support the audio element.
</audio>


		</div>
		</>
	);
};

export default Home;

//insertar de forma dinamica url de cancion en control 

//puede servirme:
// // const deleteItem = (url) => {
//     setSongs(song.filter((item, index) => {
// 		return index != id;
// 	  }))
// 	}

//2. Obtenida la fraccion de url, hay que manipular el control, useRef nos sirve(la academia solo explica useState, useEffect y useContext)

// function App() {
// 	const inputElement = useRef();
  
// 	const focusInput = () => {
// 	  inputElement.current.focus();
// 	};
  
// 	return (
// 	  <>
// 		<input type="text" ref={inputElement} />
// 		<button onClick={focusInput}>Focus Input</button>
// 	  </>
// 	);
//   }



// 	return (<SongURL/>)
// };

// export default Home;
