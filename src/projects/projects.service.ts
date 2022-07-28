import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { projects } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  create(createProjectDto: CreateProjectDto) {
    projects.push(createProjectDto);
    return {
      message: 'New Project Added Successfully!',
    };
  }

  findAll() {
    return projects;
  }

  findOne(id: number) {
    const item = projects.find((project) => project.id === id);
    if (!item) {
      return {
        message: 'Project not found by this ID!',
      };
    }
    return item;
  }

  update(id: number, updateProject: UpdateProjectDto) {
    const index = projects.findIndex((project) => project.id === id);
    projects[index].title = updateProject.title;
    projects[index].img = updateProject.img;
    projects[index].location = updateProject.location;
    return {
      message: 'Project Updated Successfully!',
    };
  }

  remove(id: number) {
    const index = projects.findIndex((project) => project.id === id);
    if (index > -1) {
      projects.splice(index, 1);
    } else {
      return {
        message: 'Project not found by this ID',
      };
    }
    return {
      message: 'Project deleted Successfully!',
    };
  }
}
