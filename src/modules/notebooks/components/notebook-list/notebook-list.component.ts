import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotebookService } from '../../services/notebook.service';

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.scss']
})
export class NotebookListComponent implements OnInit {

  public loading: boolean;
  public contentDisplayMode: String = "grid";
  public notebooks: any = {};

  constructor(
    private router: Router,
    private notebookService: NotebookService
  ) { 
    this.loading = true;
  }

  ngOnInit() {
    this.notebookService.getNotebookList().subscribe(
      data => this.notebooks = data,
      err => console.log(err),
      () => this.loading = false
    );
  }

  public switchDisplayMode(displayMode: string): void {
    this.contentDisplayMode = displayMode;
  }

  public openForm(): void {
    this.router.navigate(['/notebooks/create']);
  }

  public openNotebook(notebook: any): void {
    this.notebookService.setRouteStorage(notebook);
    this.router.navigate(['notebooks', notebook.id]);
  }

}
