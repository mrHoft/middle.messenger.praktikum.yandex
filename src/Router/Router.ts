class Route{
	protected	_pathname:string
				_page:Function
				_block:boolean
				_props:Record<string, any>;

	constructor(pathname:string, page:Function, props:Record<string, any>){
		this._pathname=pathname;
		this._page=page;
		this._block=false;
		this._props=props;
	}

	public navigate(pathname:string){
		if(this.match(pathname)){
			this._pathname=pathname;
			this.render();
		}
	}

	public leave(){
		if (this._block){
			console.log('== Route leaved: ', this._pathname);
			// this._block.hide();
		}
	}

	public match(pathname:string){
		return pathname==this._pathname;
	}

	public render(){
		if (true){	//!this._block	hide/show block function disabled
			console.log('== Route: ', this._pathname);
			this._block=this._page();
			return;
		}
		console.log('== Show without render:', this._pathname);
	}
}

class Router{
	private		history:History=window.history
	private		routes:Route[]=[];
	protected	_currentRoute:Route | null=null
	protected	_rootQuery:string
	protected static _instance:Router;

	private constructor(rootQuery:string){
		this.routes=[];
		this.history=window.history;
		this._currentRoute=null;
		this._rootQuery=rootQuery;
	}

	public static get(rootQuery:string){
		if (Router._instance)
			return Router._instance;
		return Router._instance=new Router(rootQuery);
	}

	public use(pathname:string, page:Function){
		const route=new Route(pathname, page, {rootQuery: this._rootQuery});
		this.routes.push(route);
		return this;
	}

	public start(){
		window.onpopstate=(event:Event) => {
			const target:Window | null=event.currentTarget as Window;
			if(target) this._onRoute(target.location.pathname);
		};

		this._onRoute(window.location.pathname);
	}

	private _onRoute(pathname:string){
		let route:Route | undefined=this.getRoute(pathname);
		if(!route) route=this.getRoute('/404');
		if(route){
			if (this._currentRoute) this._currentRoute.leave();
			this._currentRoute=route;
			route.render();
		}
	}

	public go(pathname:string){
		this.history.pushState({}, "", pathname);
		this._onRoute(pathname);
	}

	public back(){
		this.history.back();
	}

	public forward(){
		this.history.forward();
	}

	public getRoute(pathname:string){
		return this.routes.find(route => route.match(pathname));
	}
}

export default Router;