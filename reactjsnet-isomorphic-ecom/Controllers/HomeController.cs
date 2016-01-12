using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace reactjsnet_isomorphic_ecom.Controllers
{
	public class Product
	{
		public int itemId { get; set; }
		public string title { get; set; }

		public int price { get; set; }
	}

	public class ProductInCart
	{
		public int itemId { get; set; }
		public string title { get; set; }
		public int amount { get; set; }
		public int price { get; set; }
	}

	public class Cart
	{
		public IEnumerable<ProductInCart> Products { get; set; }
	}

	public class VM
	{
		public Cart Cart { get; set; }
		public IEnumerable<Product> ProductsList { get; set; }
	}

	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			var products = new List<Product>
			{
				new Product {itemId = 1,title = "Socks", price = 299 },
				new Product {itemId = 2, title = "Bathrobe", price = 1199 },
				new Product {itemId = 3, title = "Mayonnaise", price = 29 }
			};

			var productsInCart = products
				.Where(p => Session[p.itemId.ToString()] != null)
				.Select(p => new ProductInCart { title = p.title, itemId = p.itemId, amount = (int)Session[p.itemId.ToString()],price = p.price });

			return View(new VM
			{
				ProductsList = products,
				Cart = new Cart
				{
					Products = productsInCart
				}
			});
		}

		public ActionResult Buy(int id)
		{
			Session[id.ToString()] = (int)(Session[id.ToString()] ?? 0) + 1;
			return RedirectToAction("index");
		}

		public ActionResult Remove(int id)
		{
			Session.Remove(id.ToString());
			return RedirectToAction("Index");
		}
	}
}
