import { Component, OnInit } from '@angular/core';
import { NotebookService } from '../../services/notebook.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notebook-detail',
  templateUrl: './notebook-detail.component.html',
  styleUrls: ['./notebook-detail.component.scss']
})
export class NotebookDetailComponent implements OnInit {

  public notebook: any;
  public loading: boolean;
  public showForm: boolean;

  public newNote: any = {
    name: null,
    content: null,
    course: null
  };

  constructor(
    private notebookService: NotebookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loading = true;
    this.showForm = true;
  }

  ngOnInit() {
    const notebook: any = this.notebookService.getRouteStorage();

    if (!notebook) {
      const id = String(this.route.snapshot.paramMap.get('id'));
      this.notebookService.getNotebook(id).subscribe(
        data => this.notebook = data,
        err => console.error(err),
        () => this.loading = false
      );
    } else {
      this.notebook = notebook;
      this.loading = false;
    }
  }

  public showNoteForm(): void {
    this.showForm = !this.showForm;
  }

  public createNote(): void {

  }

}
