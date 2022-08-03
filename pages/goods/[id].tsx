import {Component} from "react";
import Default from "../../layouts/default";
import {connect} from "react-redux";
import {fetchGoodById} from "../../store/actions";
import EditGoods from "../../components/goods/EditGoods";

class Edit extends Component<any, any> {
  static getInitialProps(ctx: any) {
    const { id } = ctx.query
    if (id) {
      return {id: Number(id)}
    }

    return {}
  }

  componentDidMount() {
    if (this.props.id) {
      this.props.fetchGoodById(this.props.id)
    }
  }

  render() {
    return (
      <Default>
        <div className="sm:max-w-lg mx-auto">
          <EditGoods goodId={this.props.id}/>
        </div>
      </Default>
    );
  }
}

export default connect(null, {fetchGoodById})(Edit)
