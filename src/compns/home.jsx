const Home = () => {
    return(
        <> 
        <div className="m-12 mb-0">
            <p className="title font-montbold"><>hello,</><br></br><>Cheol-Su.</></p>
            <img className="h-16 my-4 mb-8" src="../images/notification.png"></img>
            <div>
                <p className="text-grey text-xl">Ongoing fills</p>
                <img className="h-24 my-4" src="../images/fluoxetine.png"></img>
                <img className="h-24 my-4" src="../images/lorazepam.png"></img>
            </div>
            <div>
                <p className="text-grey text-xl">Current cards</p>
                <img className="h-42 my-4" src="../images/healthcardoverview.png"></img>
            </div>
        </div>
        </>
    )
}

export default Home;