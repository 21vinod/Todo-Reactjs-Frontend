import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL: 'http://todo-react-springboot18-env.eba-fivq79iu.us-east-1.elasticbeanstalk.com'//http://localhost:5000'
    }
);
