import React, { useRef, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const EcwidStore = () => {
	const storeDiv = useRef(null);
	const scriptRef = useRef(null);

	window.localStorage.setItem('show_ecwid_logs', 'true');
	window.ecwid_script_defer = true;
	window.ecwid_dynamic_widgets = true;
	window.ec = window.ec || Object();
	window.ec.storefront = window.ec.storefront || Object();
	window.ec.enable_catalog_on_one_page = true;
	window._xnext_initialization_scripts = [
		{
			widgetType : 'ProductBrowser',
			id         : 'my-store-44306535',
			arg        : [ 'id=productBrowser', 'views=grid(20,3)' ]
		},
		{
			widgetType : 'CategoriesV2',
			id         : 'my-categories-4430653',
			arg        : [ 'id=categoriesV2' ]
		},
		{
			widgetType : 'SearchWidget',
			id         : 'my-search-4430653',
			arg        : [ 'id=searchWidget' ]
		}
	];

	var script = document.createElement('script');
	script.charset = 'utf-8';
	script.type = 'text/javascript';
	script.src = 'https://app.ecwid.com/script.js?44306535&data_platform=code&data_date=2021-01-14';
	script.defer = true;
	script.ref = scriptRef;

	const reload = () => {
		window.location.reload();
	};

	useEffect(() => {
		// if (!scriptRef.current) {
		// 	storeDiv.current.appendChild(script);
		// 	// reload();
		// }
		// reload();
	}, []);

	return (
		<div style={{ padding: '2rem' }}>
			<div id="my-search-4430653" />

			<div id="my-categories-4430653" />
			<div id="my-store-44306535" ref={storeDiv} />
			<div className="ec-cart-widget" />
		</div>
	);
};

export default withRouter(EcwidStore);
