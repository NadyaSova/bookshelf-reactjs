(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,t,o){e.exports=o(517)},226:function(e,t,o){},227:function(e,t,o){},228:function(e,t,o){},229:function(e,t,o){},230:function(e,t,o){},231:function(e,t,o){},232:function(e,t,o){},233:function(e,t,o){},315:function(e,t){},317:function(e,t){},348:function(e,t){},349:function(e,t){},397:function(e,t){},399:function(e,t){},422:function(e,t){},517:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(214),i=o.n(a),c=o(39),s=o(52),l=o(53),u=o(14),m=o(18),h=o(24),g=o(22),d=o(23),b=(o(226),function(e){function t(){var e,o;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(o=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={isActive:!0},o.hide=function(){o.setState({isActive:!1})},o}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.isActive?r.a.createElement("div",{className:"alert alert-danger alert-dismissible"},r.a.createElement("button",{className:"close",type:"button","data-dismiss":"alert",onClick:this.hide},"\xd7"),"Oops. Something went wrong."):null}}]),t}(n.Component)),p=function(e){function t(){var e,o;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(o=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},o}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(b,null):this.props.children}}]),t}(r.a.Component),f=r.a.createContext(),k=f.Provider,v=f.Consumer,E=function(){return function(e){return function(t){return r.a.createElement(v,null,function(o){return r.a.createElement(e,Object.assign({},t,{bookService:o}))})}}},C=function(e){return{type:"FETCH_BOOKS_SUCCESS",payload:e}},O=function(e,t){return function(o){o?(t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks(o).then(function(e){return t(C(e))}).catch(function(e){return t({type:"FETCH_BOOKS_FAILURE",payload:e})})):t(C([]))}},y=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},w=(o(227),function(e){function t(){var e,o;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(o=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={term:"abc"},o.onChange=function(e){var t=e.target.value;o.setState({term:t})},o.onSearch=function(e){e.preventDefault();var t=o.state.term;(0,o.props.fetchBooks)(t)},o}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.term;return r.a.createElement("form",{onSubmit:this.onSearch},r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"search-filter input-group col-xs-12 col-sm-8 col-md-6 col-lg-5"},r.a.createElement("input",{type:"text",placeholder:"book title",className:"form-control",value:e,onChange:this.onChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.onSearch},"Search"))),r.a.createElement("div",{className:"col-xs-12 col-sm-4 col-md-6 col-lg-7 align-self-center"},r.a.createElement("em",null,"Search for books, click on the book to add it to your library"))))}}]),t}(n.Component)),A=y(E(),Object(c.b)(null,function(e,t){var o=t.bookService;return{fetchBooks:O(o,e)}}))(w),j=(o(228),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.book,o=e.onClick,n=e.showClose,a=t.pageCount?"".concat(t.pageCount," pages"):"";return r.a.createElement(p,null,r.a.createElement("div",{className:"book card bg-light border-info mb-1"},r.a.createElement("div",{className:"card-body",onClick:function(){return o(t)}},r.a.createElement("div",{className:"book-image-container"},r.a.createElement("img",{src:t.img,alt:"book cover",className:"book-image"})),r.a.createElement("div",{className:"book-info-container"},r.a.createElement("div",{className:"book-title mt-1 mb-1"},t.title),r.a.createElement("div",{className:"book-authors mb-1"},t.authors),r.a.createElement("div",{className:"book-info"},a)),n&&r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"close"},"\xd7")))))}}]),t}(n.Component)),_=(o(229),function(e){var t=e.books,o=e.onClick;if(!t||0===t.length)return r.a.createElement("span",null);var n=t.map(function(e){return r.a.createElement(j,{key:e.id,book:e,onClick:o})});return r.a.createElement(p,null,n)}),S=(o(230),function(){return r.a.createElement("div",{className:"spinner-container"},r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{style:{width:"100%",height:"100%"},className:"lds-magnify"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null))))))}),B=(o(231),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,o=e.addBookToShelf,n=e.loading,a=e.error;return n?r.a.createElement(S,null):a?r.a.createElement(b,null):r.a.createElement(_,{books:t,onClick:o})}}]),t}(n.Component)),F={addBookToShelf:function(e){return{type:"ADD_BOOK_TO_SHELF",payload:e}}},x=Object(c.b)(function(e){var t=e.bookFilter;return{books:t.books,loading:t.loading,error:t.error}},F)(B),z=(o(232),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,o=e.onClick;if(!t||0===t.length)return r.a.createElement("span",null);var n=t.map(function(e){return r.a.createElement(j,{book:e,key:e.id,onClick:o,showClose:!0})});return r.a.createElement(p,null,r.a.createElement("div",{className:"card-columns",id:"books-list"},n))}}]),t}(n.Component)),N=(o(233),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedBooks,o=e.removeBookFromShelf;return t&&0!==t.length?r.a.createElement("div",{className:"selected-books jumbotron"},r.a.createElement("div",{className:"generate-link"},r.a.createElement(s.b,{to:"/bookshelf",role:"button",className:"btn btn-link mb-1"},r.a.createElement("i",{className:"fas fa-stream mr-1"}),"Generate bookshelf",r.a.createElement("i",{className:"fas fa-angle-double-right ml-1"}))),r.a.createElement(z,{books:t,onClick:o})):null}}]),t}(r.a.Component)),T={removeBookFromShelf:function(e){return{type:"REMOVE_BOOK_FROM_SHELF",payload:e}}},H=Object(c.b)(function(e){return{selectedBooks:e.selectedBooks}},T)(N),M=function(){return r.a.createElement(p,null,r.a.createElement("div",{className:"ml-4 mr-4 mt-2 mb-2"},r.a.createElement("h2",{className:"mb-3"},"Library"),r.a.createElement(A,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 col-md-4"},r.a.createElement(x,null)),r.a.createElement("div",{className:"col-sm-6 col-md-8"},r.a.createElement(H,null)))))},R=o(32),D=o(43),G=o(78),L=o.n(G),Q=20,J=275,U=20,I=40,K=70,W=180,Y=250,Z=3,P=6,q=.05,V=80,X={padding:3,fill:"black",wrap:"word",align:"center"},$=Object(D.a)({},X,{fontFamily:"Montserrat"}),ee=Object(D.a)({},X,{fontFamily:"Alegreya SC",fontStyle:"bolder"}),te=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.vertical&&(this.textAuthors.rotate(-90),this.textTitle.rotate(-90),this.rectBook.rotate(-90))}},{key:"getAuthorsFontSize",value:function(e){var t=e-4;return Math.max(t,6)}},{key:"adjustFontSize",value:function(e){var t=this.props,o=t.title,n=t.authors,r=t.width,a=t.height,i=new L.a.Text(Object(D.a)({text:o,fontSize:e,width:a},ee)),c=new L.a.Text(Object(D.a)({text:n,fontSize:this.getAuthorsFontSize(e),width:a},$)),s=i.height(),l=c.height(),u=s+l;return 6===e||u<=r?{fontSize:e,authorsElementHeight:l,textHeight:u}:this.adjustFontSize(e-1)}},{key:"render",value:function(){var e=this,t=this.props,o=t.title,n=t.authors,a=t.x,i=t.y,c=t.width,s=t.height,l=t.vertical,u=this.adjustFontSize(22),m=u.fontSize,h=u.authorsElementHeight,g=(c-u.textHeight)/2,d=l?a+g:a,b=l?i:i+g,p=l?d+h:d,f=l?b:b+h;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.Rect,{x:a,y:i,height:c,width:s,ref:function(t){return e.rectBook=t},fill:"white",stroke:"saddlebrown",strokeWidth:3}),r.a.createElement(R.Text,Object.assign({x:d,y:b,ref:function(t){return e.textAuthors=t},fontSize:this.getAuthorsFontSize(m),text:n,height:c,width:s},$)),r.a.createElement(R.Text,Object.assign({x:p,y:f,ref:function(t){return e.textTitle=t},fontSize:m,text:o,height:c-h,width:s},ee)))}}]),t}(n.Component),oe=function(e){var t=e.width,o=e.height;return r.a.createElement(R.Rect,{x:0,y:0,width:t,height:o,strokeEnabled:!1,fillLinearGradientStartPoint:{x:0,y:0},fillLinearGradientEndPoint:{x:t/5*6,y:o},fillLinearGradientColorStops:[0,"Ivory",1,"AntiqueWhite"]})},ne=function(e){var t=e.books,o=e.vertical;return t&&0!==t.length?o?r.a.createElement(pe,e):r.a.createElement(be,e):null};var re=function(e){if(e)return e.map(function(e){return Object(D.a)({},e,{width:(t=e.pageCount,!t||t<=V?I:Math.min(K,I+Math.floor((t-V)*q))),height:W+Math.floor(Math.random()*(Y-W))});var t})};function ae(e,t){for(var o=[],n=0,r=0,a=Math.random()>.5;r<e.length&&n<t;){var i=(a?ie:ce)(e.slice(r),t-n);if(0===i.books.length)return{piles:o,booksCount:r};o.push(i),r+=i.books.length,n+=i.width+Q,a=!a}return{piles:o,booksCount:r}}function ie(e,t){for(var o=[],n=Math.min(e.length,Math.floor(Math.random()*(P-Z)+Z)),r=0,a=0;r<n;r++){var i=e[r];if(a+i.width>=t)break;a+=i.width,o.push(i)}return{books:o,width:a,vertical:!0}}function ce(e,t){if(0===e.length)return{books:[],width:0,vertical:!1};for(var o=[],n=0,r=0,a=e[0].width;r<e.length&&e[r].height<t&&a<Y;a+=(e[++r]||{}).width){var i=e[r];n=Math.max(n,i.height),o.push(i)}return{books:o,width:n,vertical:!1}}var se=function(e,t){for(var o=0,n=[];o<e.length;){var r=ae(e.slice(o),t);n.push(r.piles),o+=r.booksCount}return n};function le(){return window.innerWidth-40}function ue(e){return e*J+2*U}var me=function(e){return(le()-e.reduce(function(e,t){return e+t.width},0))/(e.length+1)},he=function(e){var t=e.shelf,o=e.y,a=me(t),i=a;return r.a.createElement(n.Fragment,null,t.map(function(e){var t=r.a.createElement(ne,{key:e.books[0].id,books:e.books,vertical:e.vertical,x:i,y:o});return i+=e.width+a,t}),r.a.createElement(ge,{y:o}))},ge=function(e){var t=e.y,o=le();return r.a.createElement(R.Rect,{x:Q/2,y:t,width:o-Q,height:18,fillLinearGradientStartPoint:{x:o/4,y:0},fillLinearGradientEndPoint:{x:3*o/4,y:18},fillLinearGradientColorStops:[0,"sienna",1,"saddlebrown"],strokeEnabled:!1})},de=o(60),be=function(e){var t=e.books,o=e.x,n=e.y,a=Math.max.apply(Math,Object(de.a)(t.map(function(e){return e.height}))),i=n,c=t.map(function(e){var t=Math.floor(o+(a-e.height)/2);return i-=e.width,r.a.createElement(te,{key:e.id,title:e.title,authors:e.authors,x:t,y:i,width:e.width,height:e.height})});return r.a.createElement(r.a.Fragment,null,c)},pe=function(e){var t=e.books,o=e.x,n=e.y,a=o,i=t.map(function(e,t){var o=r.a.createElement(te,{key:e.id,title:e.title,authors:e.authors,x:a,y:n,width:e.width,height:e.height,vertical:!0});return a+=e.width,o});return r.a.createElement(r.a.Fragment,null,i)},fe=function(e){var t=re(e),o=le(),n=se(t,o-Q);return{kanvasWidth:o,kanvasHeight:ue(n.length),shelves:n}},ke=function(e){var t=e.books;if(!t||0===t.length)return null;var o=fe(t),n=o.kanvasWidth,a=o.kanvasHeight,i=o.shelves,c=Y+U;return r.a.createElement(R.Stage,{width:n,height:a},r.a.createElement(R.Layer,null,r.a.createElement(oe,{width:n,height:a}),i.map(function(e,t){return r.a.createElement(he,{key:t,shelf:e,y:c+t*J})})))},ve=function(e){function t(){var e,o;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(o=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).update=function(){o.forceUpdate()},o}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.selectedBooks;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(s.b,{to:"/",className:"btn btn-link"},r.a.createElement("i",{className:"fas fa-angle-double-left mr-1"}),"Back to books select"),r.a.createElement("h2",{className:"ml-4"},"Bookshelf",r.a.createElement("button",{className:"btn btn-link",onClick:this.update},r.a.createElement("i",{className:"fas fa-sync-alt"}))),r.a.createElement(ke,{books:e}))}}]),t}(n.Component),Ee=Object(c.b)(function(e){return{selectedBooks:e.selectedBooks}})(ve),Ce=function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",component:M,exact:!0}),r.a.createElement(l.b,{path:"/bookshelf",component:Ee}),r.a.createElement(l.a,{to:"/"}))},Oe=o(48),ye=o.n(Oe),we=o(80),Ae=o(289),je=function(){function e(){Object(u.a)(this,e),this._optionsBase={headers:{"User-Agent":"Request-Promise"},json:!0},this._urlBase="https://www.googleapis.com/books/v1/"}return Object(m.a)(e,[{key:"_transformBook",value:function(e){var t=e.volumeInfo;t.imageLinks||(t.imageLinks={});var o=t.authors?t.authors.reduce(function(e,t){return e+", "+t}):"";return{id:e.id,authors:o,title:t.title,pageCount:t.pageCount,img:t.imageLinks.thumbnail}}},{key:"getResource",value:function(){var e=Object(we.a)(ye.a.mark(function e(t){return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae(Object(D.a)({},this._optionsBase,{uri:"".concat(this._urlBase).concat(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getBooks",value:function(){var e=Object(we.a)(ye.a.mark(function e(t){var o,n=this;return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o="volumes?q=".concat(t),e.abrupt("return",this.getResource(o).then(function(e){return e.items.map(n._transformBook)}));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),_e=o(95),Se={books:[],loading:!1,error:null},Be=function(e,t){if(void 0===e)return Se;switch(t.type){case"FETCH_BOOKS_SUCCESS":return{books:t.payload,loading:!1,error:null};case"FETCH_BOOKS_REQUEST":return{loading:!0,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:t.payload};default:return e.bookFilter}},Fe=(new function e(){var t=this;Object(u.a)(this,e),this._books=[{id:"sTA2DwAAQBAJ",authors:"George R.R. Martin",title:"A Game of Thrones (A Song of Ice and Fire)",pageCount:896,img:"http://books.google.com/books/content?id=sTA2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"OYtkbGl2j0sC",authors:"Ray Bradbury",title:"Fahrenheit 451",pageCount:208,img:"http://books.google.com/books/content?id=OYtkbGl2j0sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"nkalO3OsoeMC",authors:"George Orwell",title:"Animal Farm",pageCount:144,img:"http://books.google.com/books/content?id=nkalO3OsoeMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"Bd_UZAdvUDIC",authors:"William Gibson",title:"Neuromancer",pageCount:288,img:"http://books.google.com/books/content?id=Bd_UZAdvUDIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"gnwETwF8Zb4C",authors:"Robert A. Heinlein",title:"Stranger in a Strange Land",pageCount:300,img:"http://books.google.com/books/content?id=gnwETwF8Zb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"MYoDAQAAQBAJ",authors:"Octavia Butler",title:"Kindred",pageCount:264,img:"http://books.google.com/books/content?id=MYoDAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"HtDpW3qwc88C",authors:"Arthur C. Clarke",title:"2001: A Space Odyssey",pageCount:288,img:"http://books.google.com/books/content?id=HtDpW3qwc88C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"_zSzAwAAQBAJ",authors:"Suzanne Collins",title:"The Hunger Games",pageCount:464,img:"http://books.google.com/books/content?id=_zSzAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"8qs1-ypf7e0C",authors:"Ernest Cline",title:"Ready Player One",pageCount:384,img:"http://books.google.com/books/content?id=8qs1-ypf7e0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"k53eZ2ARZPwC",authors:"Walter M. Miller",title:"A Canticle for Leibowitz",pageCount:352,img:"http://books.google.com/books/content?id=k53eZ2ARZPwC&printsec=frontcover&img=1&zoom=1&source=gbs_api"},{id:"A4LZwFCK05UC",authors:"Jules Verne",title:"20,000 Leagues under the Sea",pageCount:568,img:"http://books.google.com/books/content?id=A4LZwFCK05UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"bQlHAAAAYAAJ",authors:"Herbert George Wells",title:"The War of the Worlds",pageCount:303,img:"http://books.google.com/books/content?id=bQlHAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},{id:"u4R_FstZDEgC",authors:"Dan Simmons",title:"Hyperion",pageCount:496,img:"http://books.google.com/books/content?id=u4R_FstZDEgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"2vnbMzYXBQsC",authors:"Isaac Asimov",title:"I, Robot",pageCount:304,img:"http://books.google.com/books/content?id=2vnbMzYXBQsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"KHsHltMFsRAC",authors:"Joe Haldeman",title:"The Forever War",pageCount:236,img:"http://books.google.com/books/content?id=KHsHltMFsRAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"_oG_iTxP1pIC",authors:"Daniel Keyes",title:"Flowers for Algernon",pageCount:304,img:"http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"o79lk6nTsRgC",authors:"Margaret Atwood",title:"The Handmaid's Tale",pageCount:336,img:"http://books.google.com/books/content?id=o79lk6nTsRgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"v-IoDwAAQBAJ",authors:"Stephen King",title:"The Green Mile",pageCount:512,img:"http://books.google.com/books/content?id=v-IoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"8JyRntokmqYC",authors:"Raychel Haugrud Reiff",title:"Aldous Huxley",pageCount:144,img:"http://books.google.com/books/content?id=8JyRntokmqYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"einYDQAAQBAJ",authors:"H. G. Wells",title:"The Time Machine",pageCount:144,img:"http://books.google.com/books/content?id=einYDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"IwywDY4P6gsC",authors:"Isaac Asimov",title:"Foundation",pageCount:320,img:"http://books.google.com/books/content?id=IwywDY4P6gsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"FTHnGZeroUoC",authors:"George Orwell",title:"Nineteen Eighty-Four",pageCount:416,img:"http://books.google.com/books/content?id=FTHnGZeroUoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"p1MULH7JsTQC",authors:"Frank Herbert",title:"Dune",pageCount:896,img:"http://books.google.com/books/content?id=p1MULH7JsTQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{id:"j24GMN0OtS8C",authors:"Douglas Adams",title:"The Hitchhiker's Guide to the Galaxy",pageCount:304,img:"http://books.google.com/books/content?id=j24GMN0OtS8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}],this.getBooks=Object(we.a)(ye.a.mark(function e(){return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._books);case 1:case"end":return e.stop()}},e)}))},function(e,t){if(void 0===e)return[];switch(t.type){case"ADD_BOOK_TO_SHELF":var o=t.payload;return e.selectedBooks.indexOf(o)>=0?e.selectedBooks:[o].concat(Object(de.a)(e.selectedBooks));case"REMOVE_BOOK_FROM_SHELF":var n=t.payload,r=e.selectedBooks,a=r.indexOf(n);return a<0?e.selectedBooks:[].concat(Object(de.a)(r.slice(0,a)),Object(de.a)(r.slice(a+1)));default:return e.selectedBooks}}),xe=function(e,t){return{bookFilter:Be(e,t),selectedBooks:Fe(e,t)}},ze=Object(_e.b)(xe),Ne=new je;i.a.render(r.a.createElement(c.a,{store:ze},r.a.createElement(p,null,r.a.createElement(k,{value:Ne},r.a.createElement(s.a,null,r.a.createElement(Ce,null))))),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.b007f9d2.chunk.js.map