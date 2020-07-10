import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Button,
  Label,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const FormSchema = yup.object().shape({
  name: yup.string().required("*Text is Required"),
  select: yup.string().required("*Select Category"),
});

function App() {
  const [alldata, setalldata] = useState([]);
  const [backlogs, setbacklogs] = useState([]);
  const [inprocess, setinprocess] = useState([]);
  const [done, setdone] = useState([]);
  const [search, setSearch] = useState();
  const [filtereddata, setfiltereddata] = useState([]);
  const [show, setshow] = useState(false);

  const { control, register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const handleclick = (data) => {
    const abc = [...alldata, { ...data, id: Math.random(10) }];
    setalldata(abc);
    // console.log(abc);

    setbacklogs(abc.filter((item) => item.select === "BackLog"));
    setinprocess(abc.filter((item) => item.select === "In Process"));
    setdone(abc.filter((item) => item.select === "Done"));
    reset({ name: "", select: "" });
  };

  const handleremove = (id) => {
    setalldata(alldata.filter((item) => item.id !== id));
    setbacklogs(
      alldata.filter((item) => item.select === "BackLog" && item.id !== id)
    );
    setinprocess(
      alldata.filter((item) => item.select === "In Process" && item.id !== id)
    );
    setdone(alldata.filter((item) => item.select === "Done" && item.id !== id));
  };

  const handlechange = (e) => {
    {
      setSearch(e.target.value) !== "" ? setshow(true) : setshow(false);
    }
  };

  useEffect(() => {
    setfiltereddata(
      alldata.filter((item) => {
        return item.name.includes(search);
      })
    );
  }, [search]);

  const result = filtereddata.reduce(function (a, b) {
    a[b.select] = ++a[b.select] || 1;
    return a;
  }, {});

  const finaldata = Object.keys(result).map(function (key) {
    return { key: key, value: result[key] };
  });

  return (
    <body>
      <Container className=" container">
        <Row form className="mb-5">
          <Col md={10}>
            <FormGroup>
              <Input
                type="text"
                placeholder="Search here...."
                value={search}
                onChange={handlechange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit(handleclick)}>
          <Row form className="mb-5">
            <Col md={5}>
              <FormGroup>
                <Controller
                  as={Input}
                  type="text"
                  name="name"
                  defaultValue=""
                  placeholder="Enter text"
                  control={control}
                  ref={register}
                  // className={errors && errors.name ? "is-invalid" : ""}
                />
                {errors && errors.name && (
                  <span className="text-white">{errors.name.message}</span>
                )}
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Controller
                  as={Input}
                  type="select"
                  name="select"
                  defaultValue=""
                  control={control}
                  ref={register}
                  // className={errors && errors.select ? "is-invalid" : ""}
                >
                  <option>select</option>
                  <option>BackLog</option>
                  <option>In Process</option>
                  <option>Done</option>
                  />
                </Controller>
                {errors && errors.select && (
                  <span className="text-white">{errors.select.message}</span>
                )}
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Button color="primary">Submit</Button>
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={4}>
              <FormGroup className="border box text-center" id="backlog">
                <Label>BackLogs</Label>
                {backlogs !== null &&
                  backlogs.map((li) => (
                    <Row className="shadow border item m-3 p-2 row">
                      <Col>
                        <div>{li.name}</div>
                        <div>
                          <a href="#" onClick={() => handleremove(li.id)}>
                            X
                          </a>
                        </div>
                      </Col>
                    </Row>
                  ))}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup className="border box text-center" id="inprocess">
                <Label>In Process</Label>
                {inprocess !== null &&
                  inprocess.map((li) => (
                    <Row className="shadow border item m-3 p-2 row">
                      <Col>
                        <div>{li.name}</div>
                        <div>
                          <a href="#" onClick={() => handleremove(li.id)}>
                            X
                          </a>
                        </div>
                      </Col>
                    </Row>
                  ))}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup className="border box text-center" id="done">
                <Label>Done</Label>
                {done !== null &&
                  done.map((li) => (
                    <Row className="shadow border item m-3 p-2 row">
                      <Col>
                        <div> {li.name}</div>
                        <div>
                          <a href="#" onClick={() => handleremove(li.id)}>
                            X
                          </a>
                        </div>
                      </Col>
                    </Row>
                  ))}
              </FormGroup>
            </Col>
          </Row>
        </Form>
        {show && (
          <Row className="mt-3">
            <Col md={12} name="details">
              {search === "" ? (
                <FormGroup className="border box text-center">
                  <Row className="shadow border item m-3 p-2 row">
                    <Col>
                      <div>No data found</div>
                    </Col>
                  </Row>
                </FormGroup>
              ) : (
                <FormGroup className="border box text-center">
                  {finaldata.map((li) => (
                    <Row className="shadow border item m-3 p-2 row">
                      <Col>
                        <div>
                          {search} is found {li.value} times in {li.key}
                        </div>
                      </Col>
                    </Row>
                  ))}
                </FormGroup>
              )}
            </Col>
          </Row>
        )}
      </Container>
    </body>
  );
}

export default App;
