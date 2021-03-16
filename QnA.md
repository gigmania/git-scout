# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?

- Handling invalid values submitted with the input.

> What changes/additions would you make to the design?

- Add a search box to the results view header to enable single action lookups after the initial search input.
- Add more issues summary data to the results view.

> List a two or three features that you would consider implementing in the future that would add significant value to the project.

- Infinite scroll to load all issues
- Filter issues by label
- Build issue detail view that shows full title, full body and all labels and more issue details.
- Loading state
- UI transitions

---

### Looking Back

> Describe the major design/build decisions and why you made them.

- Consideration: Build as single page app or include view routing.  
Considering the project requirements did not call for routing and its unlikely I'll continue to iterate on the MVP, I decided not to build as SPA and not add routing overhead.

- Consideration: Build with or without redux state stores. Building the MVP using redux stores is a bit of an overkill considering the simplicity of the app state changes, but redux (ngrx) provides such a logical approach to data flow and state management, I decided the extra work to set up the stores was worth it.

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

- About 8 hours: 30 mins planning. 5.5 hours coding. 1 hour solution look ups. 30 min debugging. 30 min scenario testing.

> If you could go back and give yourself advice at the beginning of the project, what would it be?
- To spend more time planning before starting to code.  It might have saved me some time I spent refactoring.

> Did you learn anything new?

- `-webkit-line-clamp`
- `@Effect` decorator is deprecated in favor of createEffect()
- rxjs `flatmap` operator has been deprecated
- scss `lighten` function

> Do you feel that this assignment allowed you to showcase your abilities effectively?

- Yes. 

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?

- familiarity with Web Components
