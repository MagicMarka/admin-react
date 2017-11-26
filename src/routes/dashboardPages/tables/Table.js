
import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';



function displayTable(props) {
  
  return (
    <div className="wrap">
      <div className="row">
        <div className="col-md-12">
            <div className="row options">
              <form>
                <input className="form-control search-options" type="text" className="form-control" placeholder="Описание"/>
                <button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
              </form>
              <form>
                <input className="form-control search-options" type="text" className="form-control" placeholder="Компания" />
                <button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
              </form>       
              <form>
                  <select className="form-control">
                    <option disabled selected>Статус</option>
                    <option value="1">Принят</option>
                    <option value="2">В обработке</option>
                    <option value="3">Завершен</option>
                  </select>
              </form> 
              <form>
                  <input className="form-control search-orders" placeholder="Order №" type="text"/>
              </form>
              <form>
                  <select className="form-control">
                      <option disabled selected>Дата с</option>
                      <option value="1">01.01</option>
                      <option value="2">01.02</option>
                      <option value="3">01.02</option>
                  </select>
              </form> 
              <form>
                <select className="form-control">
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
            <tr> <th><input id="checkBox" type="checkbox"/></th> <th>Order №</th> <th>Дата</th> <th>Описание</th> <th>Д-т</th> <th>К-т</th> <th>Currency</th> <th>Rate</th> <th>Exchange</th> <th>Amount</th> <th>$0.00</th> <th>Comment</th><th>Chat</th><th><i className="fa fa-plus-circle" aria-hidden="true"></i></th></tr> 
        </thead> 
        <tbody> 
           <tr><td><input id="checkBox" type="checkbox"/></td> 
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
                <td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td></tr> 
           <tr><td><input id="checkBox" type="checkbox"/></td> 
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
                <td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td></tr>            <tr><td><input id="checkBox" type="checkbox"/></td> 
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
                <td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td></tr>            <tr><td><input id="checkBox" type="checkbox"/></td> 
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
                <td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td></tr> 
        </tbody> 
        </table>
    </div>

  );
}




export default displayTable;
