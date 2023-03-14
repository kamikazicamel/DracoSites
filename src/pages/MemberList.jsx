import { Flex, Heading, Text, View } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import React, { useEffect, useState, ReactDOM } from "react"
import { listMembers } from "../graphql/queries";
import { PageBody } from "./PageElements";
import { ColumnDef, createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import { Table } from "react-bootstrap";

function MemberList() {
    const [members, setMembers] = useState([])
    const [sorting, setSorting] = useState([])

    const columnHelper = createColumnHelper();
    const columns = [
        columnHelper.group({
            id:"member",
            header: "Member",
            columns: [
                columnHelper.accessor("firstName",{
                    header: () => "First Name",
                }),
                columnHelper.accessor("lastName", {
                    header: () => "Last Name",
                }),
                columnHelper.accessor("emailAddress", {
                    header: () => "Email Address",
                }),
            ],
        }),
    ];
    
    /*React.useMemo<ColumnDef<Member>[]>(
        () => [
            {
                header: 'Members',
                columns: [
                    {
                        accessorKey: 'firstName',
                        header: () => 'First Name',
                        footer: props => props.column.id,
                    },
                    {
                        accessorKey: 'lastName',
                        header: () => 'Last Name',
                        footer: props => props.column.id,
                    },
                    {
                        accessorKey: 'emailAddress',
                        header: () => 'Email Address',
                        footer: props => props.column.id,
                    },
                ]
            }
        ],
        []
    )*/

    useEffect(() => {
        fetchMembers();
    })

    async function fetchMembers(){
        const apiData = await API.graphql({query: listMembers});
        const membersFromAPI = apiData.data.listMembers.items;
        setMembers(membersFromAPI);
    }

    const table = useReactTable({ 
        members, 
        columns, 
        state:{ 
            sorting ,
        }, 
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    return(
        <PageBody>
            <View className="listMembers">
                <Heading level={1}>Current Members</Heading>
                <View margin="3rem 0">
                    <Flex direction="row">
                        <Text as="span">First Name</Text>
                        <Text as="span">Last Name</Text>
                        <Text as="span">Email Address</Text>
                    </Flex>    
                    {members.map((member) => (
                        <Flex
                            key={member.id}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text as="span">
                                {member.firstName}
                            </Text>
                            <Text as="span">{member.lastName}</Text>
                            <Text as="span">{member.emailAddress}</Text>
                        </Flex>
                    ))} 
                    
                </View>
            </View>

            <Table striped bordered hover responsive size="sm">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return(
                                    <th key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <div
                                            {...{
                                                className: header.column.getCanSort()
                                                ? 'cursor-pointer selec-none'
                                                : '',
                                                onClick: header.column.getToggleSortingHandler(),
                                            }}
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {{
                                                    asc: ' 🔼',
                                                    desc: ' 🔽',
                                                }[header.column.getIsSorted()] ?? null}
                                            </div>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table
                        .getRowModel()
                        .rows.slice(0, 100)
                        .map(row => {
                            return (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>

            </Table>

        </PageBody>
    )
}

export default MemberList;