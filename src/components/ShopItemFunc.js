import React from "react";
import PropType from 'prop-types';

export default function ShopItemFunc(props){
	const { item } = props;
	
	ShopItemFunc.propTypes = {
   		 item: PropTypes.object
  	}


	return(
	<div class="main-content">
		<h2>{item.brand}</h2>
		<h1>{item.title}</h1>
		<h3>{item.description}</h3>
		<div class="description">{item.descriptionFull}</div>
		<div class="highlight-window mobile">
			<div class="highlight-overlay"></div>
		</div>
		<div class="divider"></div>
		<div class="purchase-info">
			<div className="price">{item.currency + item.price + '.00'}</div>
			<button>Добавить в корзину</button>
		</div>
	</div>
	)
}




