﻿using System.Web;
using System.Web.Mvc;

namespace reactjsnet_isomorphic_ecom
{
	public class FilterConfig
	{
		public static void RegisterGlobalFilters(GlobalFilterCollection filters)
		{
			filters.Add(new HandleErrorAttribute());
		}
	}
}
