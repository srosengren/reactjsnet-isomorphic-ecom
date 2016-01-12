using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(reactjsnet_isomorphic_ecom.ReactConfig), "Configure")]

namespace reactjsnet_isomorphic_ecom
{
	public static class ReactConfig
	{
		public static void Configure()
		{
			// If you want to use server-side rendering of React components, 
			// add all the necessary JavaScript files here. This includes 
			// your components as well as all of their dependencies.
			// See http://reactjs.net/ for more information. Example:
			ReactSiteConfiguration.Configuration
				.AddScript("~/react/flux.js")
				.AddScript("~/react/appDispatcher.js")
				.AddScript("~/react/actionCreators.js")
				.AddScript("~/react/cartStore.js")
				.AddScript("~/react/storeListener.js")
				.AddScript("~/react/ProductList.jsx")
				.AddScript("~/react/Cart.jsx")
				.AddScript("~/react/CartList.jsx")
				.AddScript("~/react/CartTotal.jsx")
				.AddScript("~/react/BuyButton.jsx");

			// If you use an external build too (for example, Babel, Webpack,
			// Browserify or Gulp), you can improve performance by disabling 
			// ReactJS.NET's version of Babel and loading the pre-transpiled 
			// scripts. Example:
			//ReactSiteConfiguration.Configuration
			//	.SetLoadBabel(false)
			//	.AddScriptWithoutTransform("~/Scripts/bundle.server.js")
		}
	}
}