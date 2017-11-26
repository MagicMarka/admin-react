
import React from 'react';
import { Modal, Button, ButtonToolbar, Popover, Tooltip, OverlayTrigger, Col, FieldGroup, ButtonGroup } from 'react-bootstrap';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showModal() {
        this.setState({showModal: true});
    }

    hideModal() {
        this.setState({showModal: false});
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <div className="wrap">
                <div className="page-heading">
                    <h2>Операции</h2>
                    <a href="#" className="btn btn-primary btn-rounded">
                        Валюта: UAH <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </a>
                    <button className="btn btn-primary btn-rounded"
                            type="button"
                            onClick={this.showModal}>
                        Новая операция +
                    </button>
                    <form>
                        <input className="form-control search-form" placeholder="Поиск" type="text"/>
                        <button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="row options">
                            <form>
                                <input className="form-control search-options" type="text" placeholder="Описание"/>
                                <button type="submit" className="search-btn"><i className="fa fa-search"
                                                                                aria-hidden="true"></i></button>
                            </form>
                            <form>
                                <input className="form-control search-options" type="text" placeholder="Компания"/>
                                <button type="submit" className="search-btn"><i className="fa fa-search"
                                                                                aria-hidden="true"></i></button>
                            </form>
                            <form>
                                <select className="form-control state-select">
                                    <option disabled selected>Статус</option>
                                    <option value="1">Принят</option>
                                    <option value="2">В обработке</option>
                                    <option value="3">Завершен</option>
                                </select>
                            </form>
                            <form>
                                <input className="form-control search-orders" placeholder="Order №" type="text"/>
                                <button type="submit" className="search-btn"><i className="fa fa-search"
                                                                                aria-hidden="true"></i></button>
                            </form>
                            <form>
                                <select className="form-control date-select">
                                    <option disabled selected>Дата с</option>
                                    <option value="1">01.01</option>
                                    <option value="2">01.02</option>
                                    <option value="3">01.02</option>
                                </select>
                            </form>
                            <form>
                                <select className="form-control date-select">
                                    <option disabled selected>Дата по</option>
                                    <option value="1">01.01</option>
                                    <option value="2">01.02</option>
                                    <option value="3">01.02</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th><input id="checkBox" type="checkbox"/></th>
                        <th>Order №</th>
                        <th>Дата</th>
                        <th>Описание</th>
                        <th>Д-т</th>
                        <th>К-т</th>
                        <th>Currency</th>
                        <th>Rate</th>
                        <th>Exchange</th>
                        <th>Amount</th>
                        <th>$0.00</th>
                        <th>Comment</th>
                        <th>Chat</th>
                        <th><i className="fa fa-plus-circle" aria-hidden="true"></i></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input id="checkBox" type="checkbox"/></td>
                        <td>011124</td>
                        <td>25.11.2017</td>
                        <td>Ставлю долар на свой баланс</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>UAH</td>
                        <td>26.73</td>
                        <td>26.68</td>
                        <td>5890</td>
                        <td>26.68</td>
                        <td>Коментарий</td>
                        <td><i className="fa fa-comments-o" aria-hidden="true"></i></td>
                        <td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td><input id="checkBox" type="checkbox"/></td>
                        <td>011124</td>
                        <td>25.11.2017</td>
                        <td>Ставлю долар на свой баланс</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>UAH</td>
                        <td>26.73</td>
                        <td>26.68</td>
                        <td>5890</td>
                        <td>26.68</td>
                        <td>Коментарий</td>
                        <td><i className="fa fa-comments-o" aria-hidden="true"></i></td>
                        <td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td><input id="checkBox" type="checkbox"/></td>
                        <td>011124</td>
                        <td>25.11.2017</td>
                        <td>Ставлю долар на свой баланс</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>UAH</td>
                        <td>26.73</td>
                        <td>26.68</td>
                        <td>5890</td>
                        <td>26.68</td>
                        <td>Коментарий</td>
                        <td><i className="fa fa-comments-o" aria-hidden="true"></i></td>
                        <td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td><input id="checkBox" type="checkbox"/></td>
                        <td>011124</td>
                        <td>25.11.2017</td>
                        <td>Ставлю долар на свой баланс</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>UAH</td>
                        <td>26.73</td>
                        <td>26.68</td>
                        <td>5890</td>
                        <td>26.68</td>
                        <td>Коментарий</td>
                        <td><i className="fa fa-comments-o" aria-hidden="true"></i></td>
                        <td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td>
                    </tr>
                    </tbody>
                </table>
   <Modal show={this.state.showModal} onHide={this.hideModal}>
                    <Modal.Header>
                        <Modal.Title><h3>Операция № 131/4 от 27.19.2017 </h3></Modal.Title>
                        <span onClick={this.hideModal}>Закрыть</span>
                    </Modal.Header>
                    <Modal.Body>
                    <Col md={6}>
                    <h4>Направление операции:</h4>
                    <ButtonGroup>
                    <Button bsStyle="primary">Отдаю</Button>
                    <Button>Получаю</Button>
                    </ButtonGroup>
                    <h4>Форма оплаты:</h4>
                    <ButtonGroup>
                    <Button>Нал</Button>
                    <Button>Безнал</Button>
                    </ButtonGroup>
                    </Col>
                    <Col  md={6} >
                      <form>
                        <input className="form-control " type="text" placeholder="A108.8"/>
                      </form>
                    </Col>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary"><i className="fa fa-info-circle" aria-hidden="true"></i> Добавить задачу </Button>
                        <Button bsStyle="primary"><i className="fa fa-envelope-o" aria-hidden="true"></i> Поставить задачу </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}