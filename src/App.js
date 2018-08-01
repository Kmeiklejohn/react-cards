import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const Card = (props) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
            <div className={`icon fa ${props.iconValue} card__descriptionIcon`}/>
            <div className="card__descriptionText">
                {props.textValue}
                <br/>
                {props.hint && props.hint}       
            </div>
        </div>
            <div className="card__price">
                {props.priceValue}
            </div>
        </div>
);

const App = () => (
        <CardGroup>
            <Card iconValue="fa-thumbs-o-up" textValue="Trial" priceValue="Free!"/>
            <Card iconValue="fa-trophy" textValue="Basic tier" hint="(most popular)" priceValue="$10.00"/>    
            <Card iconValue="fa-bolt" textValue="Advance tier" hint="(only for enterprise-level professionals)" priceValue="$6,000.00"/>
        </CardGroup>
);

export default App;
