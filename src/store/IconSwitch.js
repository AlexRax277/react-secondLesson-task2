function IconSwitch( { foo, pic, res } ) {
    return (
        <div>
          <div className="nav-btn"><button onClick={ foo }><span className="material-icons">{ pic }</span></button></div>
          <div>{ res }</div>
        </div>
    )
}

export default IconSwitch;
