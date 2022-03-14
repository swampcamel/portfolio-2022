

let Award = (props) => {
  const { awardInfo } = props;
  return (
    <div className="Award">
      <div className="awardProject">
        <div className="awardTitle">
          <h2><a href={awardInfo.url} target="_blank" rel="noreferrer" >{awardInfo.projectTitle}</a></h2>
          <h5>{awardInfo.association}</h5>
        </div>
        <p>{awardInfo.description}</p>
      </div>
      {awardInfo.awards.map((v, i) => <div className="awardInfo">
        <div>
          <h4>{v.issuer}</h4>
          <h3>{v.category}</h3>
        </div>
        <span className="awardDate">{v.date} &nbsp;</span>
      </div> )}
    </div>
  )
}

export default Award