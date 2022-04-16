/// <reference path = "./Teacher.ts" />
/// <reference path = "./Subject.ts" />

/** Cpp Subjects Namespace */
namespace Subjects {
  export interface Teacher {
    /** Teacher's experience teaching C language */
    experienceTeachingC?: number;
  }
  export class Cpp extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher() {
      if (this.teacher.experienceTeachingC === 0) return 'No available teacher';
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
