import React from 'react';
import { List, ListInlineItem } from 'reactstrap';

function Footer(props){
  return (
    <div className="footer">
      <div className="container">
        <div className="row">

          <div className="col-12 col-sm-4">
            <List type="inline">
              <ListInlineItem> <a>Home</a></ListInlineItem>
              <ListInlineItem> <a>About</a></ListInlineItem>
              <ListInlineItem> <a>Projects</a></ListInlineItem>
              <ListInlineItem> <a>Contact</a></ListInlineItem>
            </List>
          </div>
          <div className="col-12 offset-sm-4 col-sm-4 flex-row-reverse">
            <List type="inline">
              <ListInlineItem> <a href="mailto: Jonathanlwry@gmail.com"><i className="fa fa-envelope fa-lg"></i></a></ListInlineItem>
              <ListInlineItem> <a href="https://www.linkedin.com/in/jonathan-lowery-04a599196/"><i className="fa fa-linkedin fa-lg"></i></a></ListInlineItem>
              <ListInlineItem> <a href="https://github.com/JonLowery2020"><i className="fa fa-github fa-lg"></i></a></ListInlineItem>
              <ListInlineItem> <a href="tel:+16464096782"><i className="fa fa-phone fa-lg"></i></a></ListInlineItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
