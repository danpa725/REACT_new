(this.webpackJsonpfucku=this.webpackJsonpfucku||[]).push([[0],{20:function(e,a,t){e.exports=t(45)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),i=t.n(s),c=t(2),m=t.n(c),o=t(13),l=t(14),u=t(15),v=t(18),d=t(16),p=t(19),g=t(17),y=t.n(g);t(43);var E=function(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.runtime,c=e.genres;return r.a.createElement("main",{className:"movies_movie"},r.a.createElement("div",{className:"movie_data"},r.a.createElement("img",{id:"image",src:s,alt:t,title:t}),r.a.createElement("div",{className:"etc"},r.a.createElement("h3",{className:"move_title"},t),r.a.createElement("div",{className:"wrap"},r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("p",{className:"movie_runtime"},i,"m")),r.a.createElement("ul",{className:"genres"},c.map((function(e,a){return r.a.createElement("li",{key:a,className:"genre_genres"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,200)))))},f=(t(44),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(v.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.getMovies=Object(o.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=e.sent,n=a.data.data.movies,t.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader loader-2"})):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,runtime:e.runtime,genres:e.genres})}))))}}]),a}(r.a.Component));i.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d302014f.chunk.js.map