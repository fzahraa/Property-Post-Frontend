import * as d3 from "d3";
export interface ISvgBox {
  boxPath?: string;
  constraints?: {
    y?: number;
    x?: number;
  };
}

export class mutateDonut {
  chartId: string;
  box?: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
  constructor(chartId: string) {
    this.chartId = chartId;
    this.addBox = this.addBox.bind(this);
    this.createHeadingWrapper = this.createHeadingWrapper.bind(this);
    this.addBoxHeading = this.addBoxHeading.bind(this);
    this.addTotalCount = this.addTotalCount.bind(this);
  }
  addBox(
    params?: ISvgBox
  ): d3.Selection<SVGSVGElement, unknown, HTMLElement, any> {
    const { constraints, boxPath } = params || {};
    console.log(constraints);
    var svg = d3
      .select(`#${this.chartId} .c3-chart`)
      .attr("class", `${this.chartId}__svg-container`)
      .insert("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("version", "1.1")
      .attr("xmlns", "http://www.w3.org/2000/svg")
      .attr("viewBox", "-50 -30 200 200");
    svg
      .append("image")
      .attr("class", `${this.chartId}__svg-wrapper`)
      .attr("x", constraints?.x || 14)
      .attr("y", constraints?.y || 15)
      .attr("height", 80)
      .attr("href", boxPath ?? "/images/ellipse.svg");
    this.box = svg;
    return svg;
  }

  createHeadingWrapper(
    reference: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>,
    constraints?: ISvgBox["constraints"]
  ): d3.Selection<SVGSVGElement, unknown, HTMLElement, any> {
    const update = (
      ref: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>
    ) => {
      const svg = ref
        .insert("svg")
        .attr("width", 50)
        .attr("height", 50)
        .attr("x", constraints?.x || 30)
        .attr("y", constraints?.y || 30)
        .attr("class", `${this.chartId}__svg-wrapper-nested-svg`);
      return svg;
    };
    return update(reference);
  }
  addBoxHeading(
    heading: string,
    reference: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>
  ) {
    return reference
      .insert("text")
      .attr("class", `${this.chartId}__svg-wrapper-nested-svg__tspan-total`)
      .text(heading)
      .attr("y", 10)
      .attr("x", 10)
      .attr("fill", `rgba(10, 0, 36, 0.5)`);
  }

  addTotalCount(
    count: string,
    reference: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>
  ) {
    return reference
      .append("text")
      .attr(
        "class",
        `${this.chartId}__svg-wrapper-nested-svg__tspan-percentage`
      )
      .text(`${count}`)
      .attr("y", 30)
      .attr("x", 6)
      .attr("fill", `rgba(10, 0, 36, 1)`);
  }
}
