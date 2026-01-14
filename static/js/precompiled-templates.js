// Auto-generated precompiled Handlebars templates
window.__PRECOMPILED_TEMPLATES = {};

// Component: header
window.__PRECOMPILED_TEMPLATES['header'] = {};
window.__PRECOMPILED_TEMPLATES['header'].partials = {};
window.__PRECOMPILED_TEMPLATES['header'].partials['headerBrand'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" height=\"56\" alt=\""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? lookupProperty(stack1,"altText") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":6,"column":53},"end":{"line":6,"column":125}}})) != null ? stack1 : "")
    + "\" />\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? lookupProperty(stack1,"altText") : stack1), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    return "Queensland government";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"siteTitle") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":13,"column":12}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"logo"),depth0,{"name":"logo","hash":{"fill":"currentColor","className":"qld-header-logo","height":"56","logo":"coa-landscape-2lines"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"hasDeliveringForQLDLogo") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":13,"column":12}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"logo"),depth0,{"name":"logo","hash":{"fill":"currentColor","className":"qld-header-logo is-delivering-for-qld","height":"56","logo":"coa-delivering-for-qld"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"logo"),depth0,{"name":"logo","hash":{"fill":"currentColor","className":"qld-header-logo","height":"56"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            ";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"qld-header-secondary-content\">\n            <img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"secondaryLogo") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" class=\"qld-header-secondary-image qld-header-logo\" height=\"56\" alt=\""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"secondaryLogo") : depth0)) != null ? lookupProperty(stack1,"altText") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":17,"column":113},"end":{"line":17,"column":228}}})) != null ? stack1 : "")
    + "\" />\n        </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"secondaryLogo") : depth0)) != null ? lookupProperty(stack1,"altText") : stack1), depth0));
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteTitle") || (depth0 != null ? lookupProperty(depth0,"siteTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"siteTitle","hash":{},"data":data,"loc":{"start":{"line":17,"column":175},"end":{"line":17,"column":188}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subline") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":188},"end":{"line":17,"column":221}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"subline") || (depth0 != null ? lookupProperty(depth0,"subline") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"subline","hash":{},"data":data,"loc":{"start":{"line":17,"column":203},"end":{"line":17,"column":214}}}) : helper)));
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"siteTitle") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":31,"column":15}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"qld-header-secondary-content\">\n            <span class=\"qld-header-site-title\">\n                "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"siteTitle") || (depth0 != null ? lookupProperty(depth0,"siteTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"siteTitle","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":29}}}) : helper)))
    + "\n            </span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subline") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":29,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <span class=\"qld-header-subline\">\n                "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"subline") || (depth0 != null ? lookupProperty(depth0,"subline") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"subline","hash":{},"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":27}}}) : helper)))
    + "\n            </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"qld-header-brand\">\n    <a class=\"qld-header-link d-lg-inline-flex align-middle\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":3,"column":67},"end":{"line":3,"column":74}}}) : helper)))
    + "\">\n        <div class=\"qld-header-brand-image align-self-center\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"logo") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":13,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondaryLogo") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + "    </a>\n</div>    \n";
},"usePartial":true,"useData":true});
window.__PRECOMPILED_TEMPLATES['header'].template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "dark";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","default",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":2,"column":92},"end":{"line":4,"column":55}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "default";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","dark-alt",{"name":"ifCond","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":59},"end":{"line":4,"column":44}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "dark-alt";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"globalLink") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0));
},"11":function(container,depth0,helpers,partials,data) {
    return "https://qld.gov.au";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"logo"),depth0,{"name":"logo","hash":{"fill":"currentColor","className":"qld-header-logo is-delivering-for-qld","logo":"coa-delivering-for-qld"},"data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"logo"),depth0,{"name":"logo","hash":{"fill":"currentColor","className":"qld-header-logo"},"data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"d-none d-lg-flex align-items-baseline\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"actions") : stack1),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":69,"column":29}}})) != null ? stack1 : "")
    + "                </div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"dropdown") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":68,"column":27}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"dropdown\">\n                        <a id=\"dropdown"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":23,"column":39},"end":{"line":23,"column":45}}}) : helper)))
    + "\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"\n                            class=\"qld-header-link dropdown-toggle\" href=\"#\">\n                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":25,"column":28},"end":{"line":25,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\n                        </a>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),"===","list",{"name":"ifCond","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":24},"end":{"line":51,"column":35}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),"in","html, form",{"name":"ifCond","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":24},"end":{"line":57,"column":35}}})) != null ? stack1 : "")
    + "\n                    </div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <ul class=\"dropdown-menu dropdown-menu-end\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"items") : stack1),{"name":"each","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":28},"end":{"line":38,"column":37}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"viewMore") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":28},"end":{"line":48,"column":35}}})) != null ? stack1 : "")
    + "\n                        </ul>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li>\n                                <a class=\"qld-header-link dropdown-item \" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":33,"column":80},"end":{"line":33,"column":87}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"target") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":89},"end":{"line":34,"column":71}}})) != null ? stack1 : "")
    + ">\n                                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":35,"column":36},"end":{"line":35,"column":44}}}) : helper)))
    + "\n                                </a>\n                            </li>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "target=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"target") || (depth0 != null ? lookupProperty(depth0,"target") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"target","hash":{},"data":data,"loc":{"start":{"line":34,"column":52},"end":{"line":34,"column":62}}}) : helper)))
    + "\" ";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li>\n                                <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"viewMore") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"viewMore") : stack1)) != null ? lookupProperty(stack1,"target") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":68},"end":{"line":43,"column":107}}})) != null ? stack1 : "")
    + "\n                                    class=\"qld-header-link dropdown-item border-bottom-0\">\n                                    "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"viewMore") : stack1)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "\n                                </a>\n                            </li>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "target=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"viewMore") : stack1)) != null ? lookupProperty(stack1,"target") : stack1), depth0))
    + "\" ";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"dropdown-menu dropdown-menu-end\">\n                            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"dropdown") : depth0)) != null ? lookupProperty(stack1,"HTMLContent") : stack1), depth0)) != null ? stack1 : "")
    + "\n                        </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n                    <a class=\"qld-header-link ms-16\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":62,"column":59},"end":{"line":62,"column":66}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":24},"end":{"line":66,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":66,"column":31},"end":{"line":66,"column":41}}}) : helper))) != null ? stack1 : "")
    + "\n                    </a>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <span class=\"qld-icon qld-icon-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":64,"column":55},"end":{"line":64,"column":63}}}) : helper)))
    + " qld-icon-sm qld-header-link-icon\"\n                            aria-hidden=\"true\"></span>\n                        ";
},"32":function(container,depth0,helpers,partials,data) {
    return "                    <button id=\"qld-header-toggle-search-button\" aria-controls=\"qld-header-search\"\n                        class=\"qld-header-mobile-button is-search-toggle\" aria-expanded=\"false\"\n                        aria-label=\"Open search\">Search</button>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","default",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(35, data, 0),"data":data,"loc":{"start":{"line":89,"column":80},"end":{"line":91,"column":33}}})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","dark-alt",{"name":"ifCond","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":90,"column":53},"end":{"line":91,"column":33}}})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"headerBrand"),depth0,{"name":"headerBrand","hash":{"subline":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"subline") : stack1),"siteTitle":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"siteTitle") : stack1),"logo":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"logo") : stack1),"url":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"url") : stack1),"hasDeliveringForQLDLogo":(depth0 != null ? lookupProperty(depth0,"hasDeliveringForQLDLogo") : depth0)},"data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"headerBrand"),depth0,{"name":"headerBrand","hash":{"subline":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"subline") : stack1),"secondaryLogo":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"secondaryLogo") : stack1),"siteTitle":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"siteTitle") : stack1),"logo":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"logo") : stack1),"url":((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"url") : stack1),"hasDeliveringForQLDLogo":(depth0 != null ? lookupProperty(depth0,"hasDeliveringForQLDLogo") : depth0)},"data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"col-lg-4\">\n                    <div id=\"qld-header-search\" class=\"qld-header-site-search is-closed\">\n                        <form class=\"site-search\" role=\"search\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"assets") : depth0)) != null ? lookupProperty(stack1,"siteSearch") : stack1)) != null ? lookupProperty(stack1,"formAction") : stack1)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data,"loc":{"start":{"line":118,"column":64},"end":{"line":120,"column":74}}})) != null ? stack1 : "")
    + ">\n                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"searchInput") || (depth0 != null ? lookupProperty(depth0,"searchInput") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"searchInput","hash":{},"data":data,"loc":{"start":{"line":121,"column":28},"end":{"line":121,"column":47}}}) : helper))) != null ? stack1 : "")
    + "\n                        </form>\n                    </div>\n                </div>\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n                            action=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"assets") : depth0)) != null ? lookupProperty(stack1,"siteSearch") : stack1)) != null ? lookupProperty(stack1,"formAction") : stack1)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" ";
},"44":function(container,depth0,helpers,partials,data) {
    return "\n                            action=\"https://www.qld.gov.au/search\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header class=\"qld-header \" role=\"banner\">\n    <div class=\"qld-header-pre-header "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","dark",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":38},"end":{"line":4,"column":66}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"container\">\n            <div class=\"d-flex justify-content-between\">\n\n                <a class=\"qld-header-link align-self-center\"\n                    href=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"globalLink") : stack1)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":9,"column":26},"end":{"line":9,"column":119}}})) != null ? stack1 : "")
    + "\">\n                    <span class=\"d-none d-lg-inline\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"globalLink") : stack1)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"hasDeliveringForQLDLogo") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":11,"column":20},"end":{"line":15,"column":27}}})) != null ? stack1 : "")
    + "                </a>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"preHeader") : depth0)) != null ? lookupProperty(stack1,"actions") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":71,"column":23}}})) != null ? stack1 : "")
    + "\n                <div class=\"qld-header-mobile-controls\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"assets") : depth0)) != null ? lookupProperty(stack1,"siteSearch") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":20},"end":{"line":78,"column":27}}})) != null ? stack1 : "")
    + "\n                    <button id=\"burgerBtn\" class=\"qld-header-mobile-button is-menu-toggle\" data-bs-toggle=\"collapse\"\n                        data-bs-target=\"#main-nav\" aria-controls=\"main-nav\" aria-expanded=\"false\"\n                        aria-label=\"Open menu\">Menu</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"qld-header-main "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"mainContent") : depth0)) != null ? lookupProperty(stack1,"palette") : stack1),"===","dark",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":89,"column":32},"end":{"line":91,"column":44}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"container\">\n            <div class=\"row align-items-center\">\n                <div class=\"col\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isMasterBrand") : depth0),(depth0 != null ? lookupProperty(depth0,"isSubBrand") : depth0),(depth0 != null ? lookupProperty(depth0,"isCoBrand") : depth0),{"name":"ifAny","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":20},"end":{"line":102,"column":30}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"isEndorsedBrand") : depth0),(depth0 != null ? lookupProperty(depth0,"isStandaloneBrand") : depth0),{"name":"ifAny","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":20},"end":{"line":112,"column":30}}})) != null ? stack1 : "")
    + "                </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"assets") : depth0)) != null ? lookupProperty(stack1,"siteSearch") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":16},"end":{"line":125,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</header>";
},"usePartial":true,"useData":true});

// Component: result-card-template
window.__PRECOMPILED_TEMPLATES['result-card-template'] = {};
window.__PRECOMPILED_TEMPLATES['result-card-template'].template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"card-image\">\n            <img src=\"/img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbnail") || (depth0 != null ? lookupProperty(depth0,"thumbnail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnail","hash":{},"data":data,"loc":{"start":{"line":5,"column":27},"end":{"line":5,"column":40}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbnailAlt") || (depth0 != null ? lookupProperty(depth0,"thumbnailAlt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailAlt","hash":{},"data":data,"loc":{"start":{"line":5,"column":47},"end":{"line":5,"column":65}}}) : helper)))
    + "\" />\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"card-icon-background\">\n            <span class=\"qld-icon qld-icon-lg qld-icon-building icon-left\" aria-hidden=\"true\"></span>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"link-item\"><a class=\"link view-button\" href=\"#\" onclick=\"event.preventDefault(); window.map.flyTo({center: ["
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":27,"column":135},"end":{"line":27,"column":147}}}) : helper)))
    + "], zoom: 14})\" data-location=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":27,"column":177},"end":{"line":27,"column":189}}}) : helper)))
    + "\" aria-label=\"View "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":27,"column":208},"end":{"line":27,"column":217}}}) : helper)))
    + " on map\">\n                        <span class=\"qld-icon qld-icon-md qld-icon-location leading\" aria-hidden=\"true\"></span>\n                        View on map\n                    </a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col\">\n    <div class=\"card card-default default icon-left card-multi-action\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thumbnail") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "")
    + "        <div class=\"card-body result-card\">\n            <h4 class=\"card-title\">\n                <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":14,"column":25},"end":{"line":14,"column":32}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":14,"column":34},"end":{"line":14,"column":43}}}) : helper)))
    + "</a>\n            </h4>\n            <div class=\"card-text\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"excerpt") || (depth0 != null ? lookupProperty(depth0,"excerpt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"excerpt","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <ul class=\"link-list\">\n                <li class=\"link-item\"><a class=\"link open-button\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":22,"column":72},"end":{"line":22,"column":79}}}) : helper)))
    + "\" target=\"_self\" aria-label=\"Open "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":22,"column":113},"end":{"line":22,"column":122}}}) : helper)))
    + "\">\n                        <span class=\"qld-icon qld-icon-md qld-icon-arrow-right leading\" aria-hidden=\"true\"></span>\n                        Open\n                    </a></li>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"location") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":31,"column":23}}})) != null ? stack1 : "")
    + "            </ul>\n        </div>\n    </div>\n</div>\n\n";
},"useData":true});

// Component: filter-list-template
window.__PRECOMPILED_TEMPLATES['filter-list-template'] = {};
window.__PRECOMPILED_TEMPLATES['filter-list-template'].template = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"dark p-16 d-flex flex-wrap flex-column filter-options-wrap\" data-pagefind-filters=\"wrapper\">\n    <div class=\"form-check col-6\" data-pagefind-filters=\"pill-container\">\n        <input\n        class=\"form-check-input\"\n        type=\"radio\"\n        />\n        <label class=\"form-check-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":7,"column":40},"end":{"line":7,"column":49}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"count") || (depth0 != null ? lookupProperty(depth0,"count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data,"loc":{"start":{"line":7,"column":51},"end":{"line":7,"column":60}}}) : helper)))
    + ")</label>\n  </div>\n</div>\n";
},"useData":true});

// Component: asset-nodegroup-template
window.__PRECOMPILED_TEMPLATES['asset-nodegroup-template'] = {};
window.__PRECOMPILED_TEMPLATES['asset-nodegroup-template'].template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"accordion-item\">\n  <h2 class=\"accordion-header\" id=\"heading-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":43},"end":{"line":3,"column":49}}}) : helper)))
    + "\">\n    <button\n      class=\"accordion-button\"\n      type=\"button\"\n      data-bs-toggle=\"collapse\"\n      data-bs-target=\"#collapse-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":32},"end":{"line":8,"column":38}}}) : helper)))
    + "\"\n      aria-expanded=\"true\"\n      aria-controls=\"collapse-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":30},"end":{"line":10,"column":36}}}) : helper)))
    + "\"\n    >\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":15}}}) : helper)))
    + "\n    </button>\n  </h2>\n  <div\n    id=\"collapse-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":17},"end":{"line":16,"column":23}}}) : helper)))
    + "\"\n    class=\"accordion-collapse collapse show\"\n    aria-labelledby=\"heading-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":29},"end":{"line":18,"column":35}}}) : helper)))
    + "\"\n    role=\"region\"\n  >\n    <div class=\"accordion-body\">\n      <div class=\"d-flex align-items-start\">\n        <div class=\"icon-background\">\n            <span class=\"qld-icon qld-icon-lg qld-icon-"
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":24,"column":55},"end":{"line":24,"column":65}}}) : helper)))
    + " icon-left\" aria-hidden=\"true\"></span>\n        </div>\n        <div class=\"link-column ms-4\">\n          <ul class=\"nav\">\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"fields") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":32,"column":47}}})) != null ? stack1 : "")
    + "\n        </div>  \n      </div>\n    </div>\n  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fields") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":25},"end":{"line":32,"column":19}}})) != null ? stack1 : "")
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"slug") || (depth0 != null ? lookupProperty(depth0,"slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data,"loc":{"start":{"line":30,"column":40},"end":{"line":30,"column":48}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":30,"column":50},"end":{"line":30,"column":61}}}) : helper))) != null ? stack1 : "")
    + "</a>\n            </li>\n          ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":32,"column":29},"end":{"line":32,"column":39}}}) : helper))) != null ? stack1 : "")
    + " ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"accordion-item\">\n  <h2 class=\"accordion-header\" id=\"heading-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":40,"column":43},"end":{"line":40,"column":49}}}) : helper)))
    + "\">\n    <button\n      class=\"accordion-button\"\n      type=\"button\"\n      data-bs-toggle=\"collapse\"\n      data-bs-target=\"#collapse-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":45,"column":32},"end":{"line":45,"column":38}}}) : helper)))
    + "\"\n      aria-expanded=\"true\"\n      aria-controls=\"collapse-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":47,"column":30},"end":{"line":47,"column":36}}}) : helper)))
    + "\"\n    >\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":49,"column":6},"end":{"line":49,"column":15}}}) : helper)))
    + "\n    </button>\n  </h2>\n  <div\n    id=\"collapse-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":53,"column":17},"end":{"line":53,"column":23}}}) : helper)))
    + "\"\n    class=\"accordion-collapse collapse show\"\n    aria-labelledby=\"heading-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":55,"column":29},"end":{"line":55,"column":35}}}) : helper)))
    + "\"\n    role=\"region\"\n  >\n    <div class=\"accordion-body\">\n      <div class=\"ms-4\">\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"fields") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":60,"column":8},"end":{"line":62,"column":45}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n  </div>\n</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fields") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":23},"end":{"line":62,"column":17}}})) != null ? stack1 : "")
    + " ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        <p><strong>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":61,"column":19},"end":{"line":61,"column":28}}}) : helper)))
    + ":</strong> "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":61,"column":39},"end":{"line":61,"column":50}}}) : helper))) != null ? stack1 : "")
    + "</p>\n        ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"sectionId") : depth0),"asset-related",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":39}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":67,"column":7}}})) != null ? stack1 : "");
},"useData":true});

// Component: map-dialog-template
window.__PRECOMPILED_TEMPLATES['map-dialog-template'] = {};
window.__PRECOMPILED_TEMPLATES['map-dialog-template'].template = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col\">\n    <div class=\"card card-default default card-multi-action border-0\">\n        <div class=\"card-body result-card\">\n            <h4 class=\"card-title\">\n                <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":5,"column":25},"end":{"line":5,"column":32}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":43}}}) : helper)))
    + "</a>\n            </h4>\n            <div class=\"card-text\">\n                <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":8,"column":19},"end":{"line":8,"column":38}}}) : helper))) != null ? stack1 : "")
    + "</p>\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <ul class=\"link-list\">\n                <li class=\"link-item\"><a class=\"link open-button\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":13,"column":72},"end":{"line":13,"column":79}}}) : helper)))
    + "\" target=\"_self\" aria-label=\"Open "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":13,"column":113},"end":{"line":13,"column":122}}}) : helper)))
    + "\">\n                        <span class=\"qld-icon qld-icon-md qld-icon-arrow-right leading\" aria-hidden=\"true\"></span>\n                        Open\n                    </a></li>\n                <li class=\"link-item\"><a class=\"link view-button\" href=\"#\" onclick=\"event.preventDefault(); window.map.flyTo({center: ["
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":17,"column":135},"end":{"line":17,"column":147}}}) : helper)))
    + "], zoom: 14})\" data-location=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":17,"column":177},"end":{"line":17,"column":189}}}) : helper)))
    + "\" aria-label=\"View "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":17,"column":208},"end":{"line":17,"column":217}}}) : helper)))
    + " on map\">\n                        <span class=\"qld-icon qld-icon-md qld-icon-location leading\" aria-hidden=\"true\"></span>\n                        Zoom\n                    </a></li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n";
},"useData":true});

// Component: heritage-asset-public-hb
window.__PRECOMPILED_TEMPLATES['heritage-asset-public-hb'] = {};
window.__PRECOMPILED_TEMPLATES['heritage-asset-public-hb'].template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"first")),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[@monument_name] "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"monument_name") || (depth0 != null ? lookupProperty(depth0,"monument_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monument_name","hash":{},"data":data,"loc":{"start":{"line":11,"column":17},"end":{"line":11,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[Alternate Name] "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"monument_name") || (depth0 != null ? lookupProperty(depth0,"monument_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monument_name","hash":{},"data":data,"loc":{"start":{"line":13,"column":17},"end":{"line":13,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"county") : depth0)) != null ? lookupProperty(stack1,"county_value") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":0},"end":{"line":22,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? lookupProperty(stack1,"street_value") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"town_or_city") : depth0)) != null ? lookupProperty(stack1,"town_or_city_value") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":28,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"postcode") : depth0)) != null ? lookupProperty(stack1,"postcode_value") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":31,"column":7}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[Local Government Area] "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"county") : depth0)) != null ? lookupProperty(stack1,"county_value") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[@street_value] "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? lookupProperty(stack1,"street_value") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[Suburb] "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"town_or_city") : depth0)) != null ? lookupProperty(stack1,"town_or_city_value") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[@postcode_value] "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"postcode") : depth0)) != null ? lookupProperty(stack1,"postcode_value") : stack1), depth0))
    + "\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"building_name") : depth0)) != null ? lookupProperty(stack1,"building_name_value") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":39,"column":7}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[Lot] "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"building_name") : depth0)) != null ? lookupProperty(stack1,"building_name_value") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[Plan] "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"area_reference") : depth0)) != null ? lookupProperty(stack1,"area_reference_value") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"local_heritage_list_criteria_type") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"designation_names") : depth0)) != null ? lookupProperty(stack1,"designation_name") : stack1), depth0)) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"designation_names") : depth0)) != null ? lookupProperty(stack1,"designation_name_use_type") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h3>Criteria "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"local_heritage_list_criteria_type") || (depth0 != null ? lookupProperty(depth0,"local_heritage_list_criteria_type") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"local_heritage_list_criteria_type","hash":{},"data":data,"loc":{"start":{"line":49,"column":13},"end":{"line":49,"column":52}}}) : helper)))
    + "</h3>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h4>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"designation_names") : depth0)) != null ? lookupProperty(stack1,"designation_name_use_type") : stack1), depth0)) != null ? stack1 : "")
    + "</h4>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":0},"end":{"line":65,"column":7}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ":: "
    + container.escapeExpression((lookupProperty(helpers,"clean")||(depth0 && lookupProperty(depth0,"clean"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description_type") : depth0),{"name":"clean","hash":{},"data":data,"loc":{"start":{"line":62,"column":3},"end":{"line":62,"column":31}}}))
    + " ::\n"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":63,"column":0},"end":{"line":63,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n::end::\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"county") : depth0)) != null ? lookupProperty(stack1,"county_value") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":0},"end":{"line":74,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? lookupProperty(stack1,"street_value") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":0},"end":{"line":77,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"town_or_city") : depth0)) != null ? lookupProperty(stack1,"town_or_city_value") : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":0},"end":{"line":80,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"postcode") : depth0)) != null ? lookupProperty(stack1,"postcode_value") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":0},"end":{"line":83,"column":7}}})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[@street_value] "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? lookupProperty(stack1,"street_value") : stack1), depth0))
    + "\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[Suburb] "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"town_or_city") : depth0)) != null ? lookupProperty(stack1,"town_or_city_value") : stack1), depth0))
    + "\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "::People{profile}::\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"associated_actors") : stack1),{"name":"each","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":0},"end":{"line":93,"column":9}}})) != null ? stack1 : "")
    + "::end::\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[Related] "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"associated_actor") : depth0)) != null ? lookupProperty(stack1,"actor") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(37, data, 0),"data":data,"loc":{"start":{"line":92,"column":10},"end":{"line":92,"column":100}}})) != null ? stack1 : "")
    + "\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"associated_actor") : depth0)) != null ? lookupProperty(stack1,"actor") : stack1), depth0)) != null ? stack1 : "")
    + " ";
},"37":function(container,depth0,helpers,partials,data) {
    return " (untilted) ";
},"39":function(container,depth0,helpers,partials,data) {
    return "<h3>No related resources</h3>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--section:asset-overview-->\n\n::IDs::\n[Resource ID] "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"meta") : depth0)) != null ? lookupProperty(stack1,"resourceinstanceid") : stack1), depth0))
    + "\n[Place ID] "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"system_reference_numbers") : stack1)) != null ? lookupProperty(stack1,"uuid") : stack1)) != null ? lookupProperty(stack1,"resourceid") : stack1), depth0))
    + "\n::end::\n\n::Names::\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"monument_names") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":15,"column":9}}})) != null ? stack1 : "")
    + "::end::\n\n::Address::\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"addresses") : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":32,"column":9}}})) != null ? stack1 : "")
    + "::end::\n\n::Parcel::\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"addresses") : stack1),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":40,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"area_assignments") : stack1)) != null ? lookupProperty(stack1,"area_assignment") : stack1),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":0},"end":{"line":43,"column":9}}})) != null ? stack1 : "")
    + "::end::\n\n::Criteria::\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"designation_and_protection_assignment") : stack1),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":0},"end":{"line":57,"column":9}}})) != null ? stack1 : "")
    + "::end::\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"descriptions") : stack1),{"name":"each","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":0},"end":{"line":66,"column":9}}})) != null ? stack1 : "")
    + "\n<!--section:asset-location-->\n\n::Address::\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"addresses") : stack1),{"name":"each","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":0},"end":{"line":84,"column":9}}})) != null ? stack1 : "")
    + "::end::\n\n<!--section:asset-related-->\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"associated_actors") : stack1)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.program(39, data, 0),"data":data,"loc":{"start":{"line":89,"column":0},"end":{"line":97,"column":7}}})) != null ? stack1 : "")
    + "\n";
},"useData":true});

// Component: activity
window.__PRECOMPILED_TEMPLATES['activity'] = {};
window.__PRECOMPILED_TEMPLATES['activity'].template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "- "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"activity_name") || (depth0 != null ? lookupProperty(depth0,"activity_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"activity_name","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":21}}}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "## Reference Numbers\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"system_reference_numbers") : stack1)) != null ? lookupProperty(stack1,"primaryreferencenumber") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":13,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"system_reference_numbers") : stack1)) != null ? lookupProperty(stack1,"uuid") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"heritage_asset_references") : stack1)) != null ? lookupProperty(stack1,"legacyid") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + "---\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "**Primary Reference Number**: "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"system_reference_numbers") : stack1)) != null ? lookupProperty(stack1,"primaryreferencenumber") : stack1)) != null ? lookupProperty(stack1,"primary_reference_number") : stack1), depth0))
    + "\n\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "**Resource ID**: "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"system_reference_numbers") : stack1)) != null ? lookupProperty(stack1,"uuid") : stack1)) != null ? lookupProperty(stack1,"resource_id") : stack1), depth0))
    + "\n\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "**Legacy ID**: "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"system_reference_numbers") : stack1)) != null ? lookupProperty(stack1,"legacyid") : stack1)) != null ? lookupProperty(stack1,"legacy_id") : stack1), depth0))
    + "\n\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "## Record\n\n**Record Status**: "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"record_status") || (depth0 != null ? lookupProperty(depth0,"record_status") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"record_status","hash":{},"data":data,"loc":{"start":{"line":28,"column":19},"end":{"line":28,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "## Location\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"national_grid_references") : stack1)) != null ? lookupProperty(stack1,"irish_grid_reference_tm65") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":0},"end":{"line":36,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"addresses") : stack1)) != null ? lookupProperty(stack1,"county_value") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":40,"column":7}}})) != null ? stack1 : "")
    + "\n---\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "**Irish Grid Reference**: "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"national_grid_references") : stack1)) != null ? lookupProperty(stack1,"irish_grid_reference_tm65") : stack1), depth0))
    + "\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "**County**: "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"addresses") : stack1)) != null ? lookupProperty(stack1,"county_value") : stack1), depth0))
    + "\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n## Descriptions\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"activity_descriptions") : stack1),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":0},"end":{"line":54,"column":9}}})) != null ? stack1 : "")
    + "\n---\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "#### "
    + ((stack1 = (lookupProperty(helpers,"clean")||(depth0 && lookupProperty(depth0,"clean"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"activity_description_type") : depth0),{"name":"clean","hash":{},"data":data,"loc":{"start":{"line":50,"column":5},"end":{"line":50,"column":44}}})) != null ? stack1 : "")
    + "\n\n"
    + container.escapeExpression((lookupProperty(helpers,"replace")||(depth0 && lookupProperty(depth0,"replace"))||alias2).call(alias1,(lookupProperty(helpers,"replace")||(depth0 && lookupProperty(depth0,"replace"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"activity_description") : depth0),"_x000D_","",{"name":"replace","hash":{},"data":data,"loc":{"start":{"line":52,"column":11},"end":{"line":52,"column":54}}}),"\\n","<br/>",{"name":"replace","hash":{},"data":data,"loc":{"start":{"line":52,"column":0},"end":{"line":52,"column":70}}}))
    + "\n\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "associated_licence\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n---\n\n## Cross References\n\n| &nbsp; | Name | Description\n| ----- | - | - |\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"ecrs") : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":0},"end":{"line":73,"column":9}}})) != null ? stack1 : "")
    + "\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "| #"
    + alias3((lookupProperty(helpers,"plus")||(depth0 && lookupProperty(depth0,"plus"))||alias2).call(alias1,(data && lookupProperty(data,"index")),1,{"name":"plus","hash":{},"data":data,"loc":{"start":{"line":72,"column":3},"end":{"line":72,"column":22}}}))
    + " | "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"external_cross_reference_source") || (depth0 != null ? lookupProperty(depth0,"external_cross_reference_source") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"external_cross_reference_source","hash":{},"data":data,"loc":{"start":{"line":72,"column":25},"end":{"line":72,"column":64}}}) : helper))) != null ? stack1 : "")
    + " | "
    + alias3(((helper = (helper = lookupProperty(helpers,"external_cross_reference") || (depth0 != null ? lookupProperty(depth0,"external_cross_reference") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"external_cross_reference","hash":{},"data":data,"loc":{"start":{"line":72,"column":67},"end":{"line":72,"column":97}}}) : helper)))
    + " |\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "## Names\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"activity_names") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"system_reference_numbers") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"record_status_assignment") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":43,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"activity_descriptions") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":57,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"associated_licence") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":0},"end":{"line":61,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ecrs") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":0},"end":{"line":75,"column":7}}})) != null ? stack1 : "");
},"useData":true});

// Component: maritime-vessel-public-hb
window.__PRECOMPILED_TEMPLATES['maritime-vessel-public-hb'] = {};
window.__PRECOMPILED_TEMPLATES['maritime-vessel-public-hb'].template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "- "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":12}}}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[Category Type](@category_type): "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"category_type") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[HB No.](@hb_number): "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"heritage_asset_references") : stack1)) != null ? lookupProperty(stack1,"hb_number") : stack1), depth0))
    + "\n\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[SMR No.](@smr_number): "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"heritage_asset_references") : stack1)) != null ? lookupProperty(stack1,"smr_number") : stack1), depth0))
    + "\n\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[IHR No.](@ihr_number): "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"heritage_asset_references") : stack1)) != null ? lookupProperty(stack1,"ihr_number") : stack1), depth0))
    + "\n\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n### "
    + ((stack1 = (lookupProperty(helpers,"clean")||(depth0 && lookupProperty(depth0,"clean"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description_type") : depth0),{"name":"clean","hash":{},"data":data,"loc":{"start":{"line":34,"column":4},"end":{"line":34,"column":34}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = (lookupProperty(helpers,"replace")||(depth0 && lookupProperty(depth0,"replace"))||alias2).call(alias1,(lookupProperty(helpers,"replace")||(depth0 && lookupProperty(depth0,"replace"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),"_x000D_","",{"name":"replace","hash":{},"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":36,"column":46}}}),"\\n","<br/>",{"name":"replace","hash":{},"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":36,"column":63}}})) != null ? stack1 : "")
    + "\n\n---\n\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n## Use Phases\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"use_phases") : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":0},"end":{"line":48,"column":9}}})) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "[Use Phase](@use_phases): "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n## Construction Phases\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"construction_phases") : stack1),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":0},"end":{"line":61,"column":9}}})) != null ? stack1 : "")
    + "\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[Asset type](@monument_type): "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"phase_classification") : depth0)) != null ? lookupProperty(stack1,"monument_type") : stack1), depth0)) != null ? stack1 : "")
    + "\n\n---\n\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "| ["
    + ((stack1 = (lookupProperty(helpers,"clean")||(depth0 && lookupProperty(depth0,"clean"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"area_type") : depth0),{"name":"clean","hash":{},"data":data,"loc":{"start":{"line":72,"column":3},"end":{"line":72,"column":26}}})) != null ? stack1 : "")
    + "](@localities_administrative_areas) | "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"area_names") : depth0)) != null ? lookupProperty(stack1,"area_name") : stack1), depth0)) != null ? stack1 : "")
    + " |\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "[Date](@construction_phase_display_date): "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"construction_phase_timespan") : depth0)) != null ? lookupProperty(stack1,"construction_phase_display_date") : stack1), depth0))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "## Names\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"names") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "\n## Classification\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"category_type") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + "\n## Reference Numbers\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"heritage_asset_references") : stack1)) != null ? lookupProperty(stack1,"hb_number") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"heritage_asset_references") : stack1)) != null ? lookupProperty(stack1,"smr_number") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":22,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"heritage_asset_references") : stack1)) != null ? lookupProperty(stack1,"ihr_number") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":26,"column":7}}})) != null ? stack1 : "")
    + "\n## Descriptions\n\n[Descriptions](@descriptions)\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"descriptions") : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":0},"end":{"line":40,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"use_phases") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"construction_phases") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":0},"end":{"line":63,"column":7}}})) != null ? stack1 : "")
    + "\n## Location\n\n### Administrative Areas\n\n| Area | Name |\n| ---- | ---- |\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"localities_administrative_areas") : stack1),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":0},"end":{"line":73,"column":9}}})) != null ? stack1 : "")
    + "\n[OS Map No.](@current_base_map_name): "
    + alias3((lookupProperty(helpers,"defaulty")||(depth0 && lookupProperty(depth0,"defaulty"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"geometry") : stack1)) != null ? lookupProperty(stack1,"current_base_map") : stack1)) != null ? lookupProperty(stack1,"current_base_map_names") : stack1)) != null ? lookupProperty(stack1,"current_base_map_name") : stack1),"(none)",{"name":"defaulty","hash":{},"data":data,"loc":{"start":{"line":75,"column":38},"end":{"line":75,"column":148}}}))
    + "\n\n[Geometric Properties](@spatial_metadata_notes): "
    + alias3((lookupProperty(helpers,"defaulty")||(depth0 && lookupProperty(depth0,"defaulty"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"geometry") : stack1)) != null ? lookupProperty(stack1,"spatial_metadata_descriptions") : stack1)) != null ? lookupProperty(stack1,"spatial_metadata_notes") : stack1),"(none)",{"name":"defaulty","hash":{},"data":data,"loc":{"start":{"line":77,"column":49},"end":{"line":77,"column":150}}}))
    + "\n\n[Grid Reference](@irish_grid_reference_tm65_): "
    + alias3((lookupProperty(helpers,"defaulty")||(depth0 && lookupProperty(depth0,"defaulty"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"location_data") : stack1)) != null ? lookupProperty(stack1,"national_grid_references") : stack1)) != null ? lookupProperty(stack1,"irish_grid_reference_tm65_") : stack1),"(none)",{"name":"defaulty","hash":{},"data":data,"loc":{"start":{"line":79,"column":47},"end":{"line":79,"column":138}}}))
    + "\n\n## Dates\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"ha") : depth0)) != null ? lookupProperty(stack1,"construction_phases") : stack1),{"name":"each","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":0},"end":{"line":85,"column":9}}})) != null ? stack1 : "");
},"useData":true});

