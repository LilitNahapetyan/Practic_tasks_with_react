function Info({next,page,pages,totalrecords}){

    return(
        <div>
            <h2>Current page: {page}</h2>
            <h2>Total pages: {pages}</h2>
            <h2>Total records: {totalrecords}</h2>
            <a href = {next}>Get next page data</a>
        </div>
    )
}

export default Info;