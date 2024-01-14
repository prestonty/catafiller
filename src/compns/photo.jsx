const Photo = () => {
    return(
        <>
        <div>
        <a href="/"><img className="h-8 m-12" src="../icons/arrowleft.png"></img></a>
            <p class="title mx-24">take a photo of your id</p>
            <div class="photogrey" className="m-128"></div>
            <a href="/refillsent"><img className="h-16 m-12 ml-44" src="../icons/camera.png"></img></a>
        </div><div className="m-80"></div>
        </>
    )
}

export default Photo;