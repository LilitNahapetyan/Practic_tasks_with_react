import Imagecard from "./ImageCard";
function Records({id,century,department,dimensions,title,totalpageviews,images}){
    return (
        <div className="recordInfo">
            <h2>Title:{title}</h2>
            <h3>Department:{department}</h3>
            <h3>Dimensions:{dimensions}</h3>
            <h3>Century:{century}</h3>
            <span>Total views: {totalpageviews}</span>
            <div className="imagecontainer">
                {images.map(({baseimageurl, copyright, date, technique, alttext,idsid})=>
                <Imagecard
                key={idsid}
                date={date}
                alttext={alttext}
                copyright={copyright}
                technique={technique}
                baseimageurl={baseimageurl}
                />)}
            </div>

        </div>
    )
}

export default Records;