import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form, Input, DatePicker, Alert, Select  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../App.css';

const { TextArea } = Input;
const { Option } = Select;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class HomePage extends Component {

	constructor(props) {
      super(props);
      this.state = {
        modalVisible: false,
        moveModalVisible: false,
        moveIndex: '',
        task_due_date: '',
        moveTaskValue: {},
        sourceColumnTitle: '',
        backlog_task_list: [],
        development_task_list: [],
        code_review_task_list: [],
        acceptance_task_list: []
    	};
	}

	onChange = (date, dateString) => {
	  this.setState({ task_due_date: dateString });
	}

	setmodalVisible(modalVisible) {
		this.setState({ modalVisible });
	}

	setMoveModalVisible(moveModalVisible, index, sourceColumnTitle) {
		if (moveModalVisible) {
			this.setState({ moveModalVisible, moveIndex: index, sourceColumnTitle: sourceColumnTitle });
		}else{
			this.setState({ moveModalVisible, moveIndex: '', sourceColumnTitle: sourceColumnTitle });
		}
	}

	handleChange = (value) => {
		console.log(`selected ${value}`);
		this.setState({ destinationColumnTitle: value });
	}

	onFinish = values => {
	    let form_value = {
	    	title: values.title,
	    	description: values.description,
	    	due_date: this.state.task_due_date
	    }
	    if (this.state.backlog_task_list.length < 5) {
		    this.state.backlog_task_list.push(form_value);
		    this.setmodalVisible(false)
	    }else{
	    	alert("Task limit exceed....")
	    }
	};

	onMoveFinish = values => {
	    if (this.state.sourceColumnTitle !== this.state.destinationColumnTitle) {
	    	switch(this.state.sourceColumnTitle) {
			  case 'Backlogs':
		    		this.state.backlog_task_list.map((task, index) => { 
		    			if(index === this.state.moveIndex){
		    				this.setState({ moveTaskValue: task });	
			    			this.state.backlog_task_list.splice(index,1);
		    			}
		    		})
				    switch(values.select_list) {
				    	case 'Development':
				    		if (this.state.development_task_list.length < 4) {
						    	this.state.development_task_list.push(this.state.moveTaskValue);
				    		}else{
				    			this.state.backlog_task_list.splice(this.state.moveIndex,1,this.state.moveTaskValue); 
				    			alert("Task limit exceed....") 
				    		}
					    break;
					    case 'Code Review':
					    	this.state.code_review_task_list.push(this.state.moveTaskValue);
					    break;
					    case 'Acceptance':
					    	this.state.acceptance_task_list.push(this.state.moveTaskValue);
					    break;
				    }
				    this.setmodalVisible(false)
			    break;
			  case 'Development':
			    		this.state.development_task_list.map((task, index) => { 
			    			if(index === this.state.moveIndex){
			    				this.setState({ moveTaskValue: task });	
				    			this.state.development_task_list.splice(index,1);
			    			}
			    		})
					    
					    switch(values.select_list) {
					    	case 'Backlogs':
					    		if (this.state.backlog_task_list.length < 5) {
							    	this.state.backlog_task_list.push(this.state.moveTaskValue);
					    		}else{ 
					    			this.state.development_task_list.splice(this.state.moveIndex,1,this.state.moveTaskValue); 
					    			alert("Task limit exceed....") 
					    		}
						    break;
						    case 'Code Review':
						    	this.state.code_review_task_list.push(this.state.moveTaskValue);
						    break;
						    case 'Acceptance':
						    	this.state.acceptance_task_list.push(this.state.moveTaskValue);
						    break;
					    }
					    this.setmodalVisible(false)
			    break;
			  case 'Code Review':
				    		this.state.code_review_task_list.map((task, index) => { 
				    			if(index === this.state.moveIndex){
				    				this.setState({ moveTaskValue: task });	
					    			this.state.code_review_task_list.splice(index,1);
				    			}
				    		})
					    
					    switch(values.select_list) {
					    	case 'Development':
					    		if (this.state.development_task_list.length < 4) {
							    	this.state.development_task_list.push(this.state.moveTaskValue);
					    		}else{ 
					    			this.state.code_review_task_list.splice(this.state.moveIndex,1,this.state.moveTaskValue); 
					    			alert("Task limit exceed....") 
					    		}
						    break;
						    case 'Backlogs':
						    	if (this.state.development_task_list.length < 5) {
							    	this.state.backlog_task_list.push(this.state.moveTaskValue);
					    		}else{ 
					    			this.state.code_review_task_list.splice(this.state.moveIndex,1,this.state.moveTaskValue); 
					    			alert("Task limit exceed....") 
					    		}
						    break;
						    case 'Acceptance':
						    	this.state.acceptance_task_list.push(this.state.moveTaskValue);
						    break;
					    }
					    this.setmodalVisible(false)
			    break;
			   case 'Acceptance':
				    		this.state.acceptance_task_list.map((task, index) => { 
				    			if(index === this.state.moveIndex){
				    				this.setState({ moveTaskValue: task });	
					    			this.state.acceptance_task_list.splice(index,1);
				    			}
				    		})
					    
					    switch(values.select_list) {
					    	case 'Development':
					    		if (this.state.development_task_list.length < 4) {
							    	this.state.development_task_list.push(this.state.moveTaskValue);
					    		}else{ 
					    			this.state.acceptance_task_list.splice(this.state.moveIndex,1,this.state.moveTaskValue); 
					    			alert("Task limit exceed....") 
					    		}
						    break;
						    case 'Code Review':
						    	this.state.code_review_task_list.push(this.state.moveTaskValue);
						    break;
						    case 'Backlogs':
						    	if (this.state.backlog_task_list.length < 5) {
							    	this.state.backlog_task_list.push(this.state.moveTaskValue);
					    		}else{ 
					    			this.state.acceptance_task_list.splice(this.state.moveIndex,1,this.state.moveTaskValue); 
					    			alert("Task limit exceed....") 
					    		}
						    break;
					    }
					    this.setmodalVisible(false)
			    break;   
			}
		    this.setState({ moveModalVisible: false });
	    }else{
	    	alert("Please select diffrent list name")
	    }
	    
	};

	onFinishFailed = errorInfo => {
	    console.log('Failed:', errorInfo);
  	};

	render() {
		return (
			<div className="App">
		      <div className={'ant-card ant-card ant-card-bordered ant-card-wider-padding'}>
		        <Row gutter={0}>
		          <Col xs={24}>
		          	<Row>
		                <Button icon={<PlusOutlined />} type="primary" onClick={() => this.setmodalVisible(true)} style={{ margin: 20 }}>Add Task</Button>
		          	</Row>
		            <Row gutter={0} type={'flex'}>
		              <Col xs={6}>
		                <Card title="Backlogs" className="task-title">
		                  {this.state.backlog_task_list.length > 0 ?
			                  	this.state.backlog_task_list.map((task, index) => {
			                  		return(
			                  			<Card key={index} title={task.title} extra={<a href="#" onClick={() => this.setMoveModalVisible(true, index, 'Backlogs')}>Move</a>} style={{ marginTop: 20}}>
									      <p style={{wordWrap: 'break-word'}}>Description: {task.description}</p>
									      <p>Due Date : {task.due_date}</p>
									    </Card>
			                  		);
			                  	})
		                  	:
		                  		null
		                  }
		                </Card>
		              </Col>
		              <Col xs={6}>
		                <Card title="Development" className="task-title">
		                	{this.state.development_task_list.length > 0 ?
			                  	this.state.development_task_list.map((task, index) => {
			                  		return(
			                  			<Card key={index} title={task.title} extra={<a href="#" onClick={() => this.setMoveModalVisible(true, index, 'Development')}>Move</a>} style={{ marginTop: 20}}>
									      <p style={{wordWrap: 'break-word'}}>Description: {task.description}</p>
									      <p>Due Date : {task.due_date}</p>
									    </Card>
			                  		);
			                  	})
		                  	:
		                  		null
		                  }
		                </Card>
		              </Col>
		              <Col xs={6}>
		                <Card title="Code Review" className="task-title">
		                	{this.state.code_review_task_list.length > 0 ?
			                  	this.state.code_review_task_list.map((task, index) => {
			                  		return(
			                  			<Card key={index} title={task.title} extra={<a href="#" onClick={() => this.setMoveModalVisible(true, index, 'Code Review')}>Move</a>} style={{ marginTop: 20}}>
									      <p style={{wordWrap: 'break-word'}}>Description: {task.description}</p>
									      <p>Due Date : {task.due_date}</p>
									    </Card>
			                  		);
			                  	})
		                  	:
		                  		null
		                  }
		                </Card>
		              </Col>
		              <Col xs={6}>
		                <Card title="Acceptance" className="task-title">
		                	{this.state.acceptance_task_list.length > 0 ?
			                  	this.state.acceptance_task_list.map((task, index) => {
			                  		return(
			                  			<Card key={index} title={task.title} extra={<a href="#" onClick={() => this.setMoveModalVisible(true, index, 'Acceptance')}>Move</a>} style={{ marginTop: 20, backgroundColor: '#52c41a', color: '#ffffff'}}>
									      <p style={{wordWrap: 'break-word'}}>Description: {task.description}</p>
									      <p>Due Date : {task.due_date}</p>
									    </Card>
			                  		);
			                  	})
		                  	:
		                  		null
		                  }
		                </Card>
		              </Col>
		            </Row>
		          </Col>
		        </Row>
		        <Modal
		          title="Add Task"
		          centered
		          visible={this.state.modalVisible}
		          onCancel={() => this.setmodalVisible(false)}
		          footer={null}
		        >
		          <Form
				      {...layout}
				      name="basic"
				      initialValues={{ remember: false }}
				      onFinish={this.onFinish}
				      onFinishFailed={this.onFinishFailed}
				    >
				      <Form.Item
				        label="Title"
				        name="title"
				        rules={[{ required: true, message: 'Please input title!' }]}
				      >
				        <Input />
				      </Form.Item>

				      <Form.Item
				        label="Description"
				        name="description"
				        rules={[{ required: true, message: 'Please input description!' }]}
				      >
				        <TextArea rows={4}/>
				      </Form.Item>

				     <Form.Item
				        label="Due Date"
				        name="due_date"
				        mode={['date', 'date']}
				        rules={[{ required: true, message: 'Please select due date' }]}
				      >
				        <DatePicker onChange={this.onChange} showTime={false}/>
				      </Form.Item>

				      <Form.Item {...tailLayout}>
				        <Button type="primary" htmlType="submit">
				          Submit
				        </Button>
				      </Form.Item>
				    </Form>
		        </Modal>
		        <Modal
		          title="Move Task"
		          centered
		          visible={this.state.moveModalVisible}
		          onCancel={() => this.setMoveModalVisible(false)}
		          footer={null}
		        >
		          <Form
				      {...layout}
				      name="basic"
				      initialValues={{ remember: false }}
				      onFinish={this.onMoveFinish}
				    >
				      <Form.Item
				        label="Select List"
				        name="select_list"
				        rules={[{ required: true}]}
				      >
				        <Select onChange={this.handleChange}>
					      <Option value="Backlogs">Backlogs</Option>
					      <Option value="Development">Development</Option>
					      <Option value="Code Review">Code Review</Option>
					      <Option value="Acceptance">Acceptance</Option>
					    </Select>
				      </Form.Item>

				      <Form.Item {...tailLayout}>
				        <Button type="primary" htmlType="submit">
				          Submit
				        </Button>
				      </Form.Item>
				    </Form>
		        </Modal>
		      </div>
		    </div>
		);
	}
}

export default HomePage;