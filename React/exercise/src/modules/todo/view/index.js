import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Service from '../service';
import useStyles from './style';


const defautState = {
  todos: [],
  isLoading: false,
}

const TodoView = () => {
  const classes = useStyles();
  const [state, setState] = useState(defautState);

  const fetchTodos = async () => {
    setState(prevState => ({
      ...prevState,
      isLoading: true,
    }));

    const { data, error } = await Service.get();

    setState(prevState => ({
      ...prevState,
      todos: error ? [] : data,
      isLoading: false,
    }));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={classes.todoWrapper}>
      <Typography variant="h5" className={classes.appTitle}>
        TODOS
      </Typography>
      {state.todos.map(todo => (
        <Paper
          elevation={4}
          classes={{
            root: clsx(classes.paperRoot, {
              [classes.todoCompleted]: todo.completed,
            })
          }}
        >
          <Chip label={`ID: ${todo.id}`} variant='outlined' color={todo.completed ? 'success' : 'error'} />
          <div className={classes.todoTitleWrapper}>
            <Typography variant="body2" className={classes.todoTitleText}>
              <Typography variant="body1" className={classes.todoTitleLabel} component='span'>
                Title:{' '} 
              </Typography>
              {todo.title}
            </Typography>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default TodoView;