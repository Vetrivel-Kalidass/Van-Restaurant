import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DishService } from '../services/dish.service';
import { Comment } from '../shared/comments';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: string[];
  prevId: string;
  nextId: string;

  commentForm: FormGroup;
  newComment: Comment;
  commentFormState: boolean;
  errMess: string;

  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
    ) {
      this.createForm();
    }

  formErrors = {
    "author": "",
    "comment": ""
  };

  errorMessages = {
    "author": {
      "required": "we want your name",
      "minlength": "your name should be minimum 2 characters",
      "maaxlength": "your name should be maximum 25 characters"
    },
    "comment":  {
      "required": "we want your comment"
    }
  };

  ngOnInit() {
    this.dishservice.getDishIds().subscribe( dishIds => (this.dishIds = dishIds));
    this.route.params.pipe(switchMap((param: Params) => this.dishservice.getDish(param['id'])))
      .subscribe(dish => {
        this.dish = dish;
        this.setPrevNext(dish.id);
      },
      error => this.errMess = <any>error);
  }

  setPrevNext(id: string){
    const index = this.dishIds.indexOf(id);
    this.prevId = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.nextId = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(){
    let dateTime = new Date();
    const newComment: Comment = {...this.commentForm.value, "date": dateTime.toISOString()};
    this.dish.comments.push(newComment);
    this.commentForm.reset();
    this.toggleCommentForm();
  }

  createForm(){
    this.commentForm = this.fb.group({
      author: this.fb.control(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      rating: this.fb.control(5),
      comment: this.fb.control(null, Validators.required)
    });
    this.commentForm.valueChanges.subscribe(data => this.validation(data));
  }

  validation(data?: any){
    if(!this.commentForm) { return; }
    for(const field in this.formErrors){
      const control = this.commentForm.get(field);
      if(control && control.dirty && !control.valid){
        const messages = this.errorMessages[field];
        for(const error in control.errors){
          this.formErrors[field] = messages[error];
        }
      }
    }
  }

  toggleCommentForm() {
    this.commentFormState = !this.commentFormState;
  }

}
