import React,{Component, PropTypes} from 'react'; 
import CardForm from './CardForm'
import CardActionCreators from '../actions/CardActionCreators';
import DraftStore from '../stores/DraftStore';
import {Container} from 'flux/utils';

class NewCard extends Component{
  componentWillMount(){
    this.setState({
      id: Date.now(),
      title:'',
      description:'',
      status:'todo',
      color:'#c9c9c9',
      tasks:[]
}); }

handleChange(field, value){
  CardActionCreators.updateDraft(field, value);
}

handleSubmit(e){
e.preventDefault(); 
CardActionCreators.addCard(this.state.draft);
this.props.router.push('/');
}
componentDidMount(){
  setTimeout(()=>CardActionCreators.createDraft(), 0)
}
handleClose(e){ 
  this.props.router.push('/');
}

render(){ return (
<CardForm draftCard={this.state.draft}
buttonLabel="Create Card"
handleChange={this.handleChange.bind(this)}
handleSubmit={this.handleSubmit.bind(this)}
handleClose={this.handleClose.bind(this)} />
); }

}

NewCard.propTypes = {
  cardCallbacks: PropTypes.object,
};
NewCard.getStores = () => ([DraftStore]);
NewCard.calculateState = (prevState) => ({
  draft: DraftStore.getState()
});
export default Container.create(NewCard);